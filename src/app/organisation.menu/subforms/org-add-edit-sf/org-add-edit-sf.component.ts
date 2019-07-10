import {Component, Inject, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';
import {IOrganisation} from '../../../model/organisation.interface';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {OrgDaoService} from '../../../dao/OrgDao.service';
import {OrganisationBuilderService} from '../../../utils/form-builders/organisation-builder.service';

@Component({
  selector: 'app-org-add-edit-sf',
  templateUrl: './org-add-edit-sf.component.html',
  styleUrls: ['./org-add-edit-sf.component.scss']
})
export class OrgAddEditSfComponent implements OnInit,  OnDestroy {


  dataSource: any = [];
  data = [];
  data$: Observable<any>;
  formGroup: FormGroup;
  selectedRowIndex;
  displayedColumns: string[] = [
    // 'select',
    'name',
    // 'address',
    // 'orgType',
    // 'sector',
    // 'edits',
  ];
  selection = new SelectionModel<IOrganisation>(true, []);
  @ViewChild('confirmDelete', {static: true}) confirmDeleteTmpl: TemplateRef<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private dao: OrgDaoService,
              private builder: OrganisationBuilderService,
              private dialog: MatDialog) {
    this.formGroup = this.builder.buildOrgGroup();
    this.dao.enterprises$
        .subscribe(b => {
          console.log('returned data', b);
          this.dataSource = new MatTableDataSource<IOrganisation>(b);
          this.data = b;
        });
    // .unsubscribe();
    this.data$ = this.dao.enterprises$;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {

  }

  highlight(row) {
    this.selectedRowIndex = row.id;
    console.log('row', row.id);
    this.dao.getDocRef(row, row.id);
  }

  openDialog() {
    // const ref = this.dialog.open(ConfirmDeleteComponent, {
    //   width: '250px',
    //   data: {msg: 'Delete Records ?', list: null}
    // });
    //
    // return ref.afterClosed();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  addtestdata() {
    this.dao.getTestData();
  }

  removeSelectedRows() {
    // this.openDialog()
    //     .subscribe(a => {
    //       if (!a) {
    //         this.selection.clear();
    //         return;
    //       }
    //
    //       const batch = [];
    //       this.selection.selected.forEach(item => {
    //         const index: number = this.data.findIndex(d => d === item);
    //         batch.push(this.data[index].id);
    //         console.log('ids', this.data[index].id);
    //         this.data.splice(index, 1);
    //         this.dataSource = new MatTableDataSource<IOrganisation>(this.data);
    //       });
    //
    //       // show popup
    //       const retval = this.dao.deleteFor(batch).then(result => {
    //         console.log('have a delete result:', result);
    //         this.selection = new SelectionModel<IOrganisation>(true, []);
    //       })
    //           .catch(err => {
    //
    //           });
    //       console.log('ids to delete', retval);
    //
    //     });
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

  onOrgSelected(event) {
    console.log('org selected', event);
    this.formGroup = this.builder.buildGroup(event);
  }

}


// @Component({
//   template: `
//    <div> Delete records?</div>
//     <div>
//         <button mat-button color="accent" (click)="cancel()">Cancel</button>
//         <button mat-button color="primary" (click)="confirmProceed()">CONTINUE</button>
//
//     </div>
//    `
// })
// export class ConfirmDeleteComponent {
//   constructor(public dialogRef: MatDialogRef<any>,
//               @Inject(MAT_DIALOG_DATA) public dialogData: any) {
//
//   }
//
//   retval = false;
//
//   confirmProceed() {
//
//     this.dialogRef.close(true);
//   }
//
//   cancel() {
//     this.dialogRef.close(false);
//   }
//
//   onNoClick(): void {
//     this.dialogRef.close(false);
//   }
// }
