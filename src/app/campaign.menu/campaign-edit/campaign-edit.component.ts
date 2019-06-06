import {Component, Inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CampaignFactory, enCampaignLbls, ICampaign} from '../../model/campaign.interface';
import {OrgDaoService} from '../../dao/OrgDao.service';
import {ActivatedRoute} from '@angular/router';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {EditStates} from '../../dao/collections.enum';
import {CampaignDaoService} from '../../dao/campaignDao.service';
import {CampaignItemAddComponent} from '../campaign-item-add/campaign-item-add.component';
import {isNull} from 'util';

@Component({
    selector: 'app-campaign-edit',
    templateUrl: './campaign-edit.component.html',
    styleUrls: ['./campaign-edit.component.scss']
})
export class CampaignEditComponent implements OnInit {

    @ViewChild('editableCampaignItemTemplate') editableCampaignItemTemplate: TemplateRef<any>;
    formGrp: FormGroup;
    validations;
    private editState: EditStates = EditStates.add;
    public enCamp = enCampaignLbls;
    testval = 'william';

    constructor(public campaignFactory: CampaignFactory,
                private builder: FormBuilder,
                private route: ActivatedRoute,
                private snackBar: MatSnackBar,
                private dialog: MatDialog,
                private dao: CampaignDaoService) {
        this.formGrp = campaignFactory.buildCampaignForm();
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        // this.onAddNew();
    }

    onSave() {
        const data = this.formGrp.getRawValue();
        this.dao.insertCam(data);
    }

    onCancel() {
    }

    onReset() {
    }

    newCampaignItem() {
        return this.campaignFactory.newItem();
    }

    onAddNew() {
        const dialogRef = this.dialog.open(CampaignItemAddComponent, {
            width: '1950px',
            data: {formGroup: this.builder.group(this.newCampaignItem())}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
            if (!isNull(result)) {
                const ctl: FormArray = this.formGrp.get('items') as FormArray;
                const arr: any[] = ctl.value;
                ctl.push(this.campaignFactory.appendItem(result));
                // ctl.setValue(arr);
                console.log('the value of ctl/arr is', ctl, arr);
            }
        });
    }

    doEditCampaignItem(idx, itm) {
        const ref = this.dialog.open(CampaignItemEditPopupComponent,
            {
                data: {
                    idx: idx,
                    formGroup: this.formGrp,
                    formGroupName: 'items',
                    formArrayName: idx,
                },
            });
    }

}

@Component({
    templateUrl: './CampaignItemEditPopupComponent.html'
})
export class CampaignItemEditPopupComponent {
    public templ: TemplateRef<any>;
    public formGroup;
    idx;
    formArrayName;
    formGroupName;
    public formContext: any;

    constructor(@Inject(MAT_DIALOG_DATA) public data,
                public dialogRef: MatDialogRef<CampaignItemEditPopupComponent>,) {
        this.idx = data.idx;
        this.formGroupName = 'items';
        this.formGroup = data.formGroup;
        this.dialogRef.afterClosed()
            .subscribe(res => {
                const arr: FormArray = this.formGroup.get('items');
                const ctrl: AbstractControl = arr.at(this.idx);
                console.log('res', res[0]);
                ctrl.patchValue({personsId: res.personsId});
                console.log('at', ctrl);

            });
        const ctl: AbstractControl = this.formGroup.get('items');
        ctl.valueChanges
            .subscribe(res1 => console.log('Chanfe ofter updats', res1));
    }

    onClose() {
        const ctl: FormArray = this.formGroup.get('items');
        const data = ctl.getRawValue()[this.idx];
        console.log('data', ctl);
        this.dialogRef.close(data);

    }

}

