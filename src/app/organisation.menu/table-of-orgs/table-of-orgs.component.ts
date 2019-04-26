import {Component, Inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {OrgDaoService} from '../../dao/OrgDao.service';
import {SelectionModel} from '@angular/cdk/collections';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatTableDataSource} from '@angular/material';
import {IOrganisation} from '../../model/organisation.interface';
import {MatPaginator, MatSort} from '@angular/material';

@Component({
    selector: 'app-table-of-orgs',
    templateUrl: './table-of-orgs.component.html',
    styleUrls: ['./table-of-orgs.component.scss']
})
export class TableOfOrgsComponent implements OnInit {


    dataSource: any = [];
    data = [];
    selectedRowIndex;
    displayedColumns: string[] = [
        'select',
        'name',
        'address',
        'orgType',
        'sector',
        'edits',
    ];
    selection = new SelectionModel<IOrganisation>(true, []);
    @ViewChild('confirmDelete') confirmDeleteTmpl: TemplateRef<any>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private dao: OrgDaoService,
                private dialog: MatDialog) {
        console.log('in const');
        this.dao.getOrgs()
            .subscribe(b => {
                console.log('returned data', b);
                this.dataSource = new MatTableDataSource<IOrganisation>(b);
                this.data = b;
            });
    }

    ngOnInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    highlight(row) {
        this.selectedRowIndex = row.id;
    }

    openDialog() {
        const ref = this.dialog.open(ConfirmDeleteComponent, {
            width: '250px',
            data: {msg: 'Delete Records ?', list: null}
        });

        return ref.afterClosed();
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    removeSelectedRows() {
        this.openDialog()
            .subscribe(a => {
                if (!a) {
                    this.selection.clear();
                    return;
                }

                const batch = [];
                this.selection.selected.forEach(item => {
                    const index: number = this.data.findIndex(d => d === item);
                    batch.push(this.data[index].id);
                    console.log('ids', this.data[index].id);
                    this.data.splice(index, 1);
                    this.dataSource = new MatTableDataSource<IOrganisation>(this.data);
                });

                // show popup
                const retval = this.dao.deleteFor(batch).then(result => {
                    console.log('have a delete result:', result);
                    this.selection = new SelectionModel<IOrganisation>(true, []);
                })
                    .catch(err => {

                    });
                console.log('ids to delete', retval);

            });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    // rowMouseover(arg) {
    //     console.log('mouse over', arg);
    // }
    //
    // onNameClicked(target) {
    //     console.log('mouse over', target);
    // }
    //
    // editItem(itm: any) {
    //
    // }
    //
    // deleteItem(idx: number) {
    //
    // }

}


@Component({
    template: `
   <div> Delete records?</div>
    <div>
        <button mat-button color="accent" (click)="cancel()">Cancel</button>
        <button mat-button color="primary" (click)="confirmProceed()">CONTINUE</button>

    </div>
   `
})
export class ConfirmDeleteComponent {
    constructor(public dialogRef: MatDialogRef<any>,
                @Inject(MAT_DIALOG_DATA) public dialogData: any) {

    }

    retval = false;

    confirmProceed() {

        this.dialogRef.close(true);
    }

    cancel() {
        this.dialogRef.close(false);
    }

    onNoClick(): void {
        this.dialogRef.close(false);
    }
}
