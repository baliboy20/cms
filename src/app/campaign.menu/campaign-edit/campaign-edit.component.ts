import {Component, OnInit} from '@angular/core';
import {CampaignFactory, enCampaignLbls, ICampaign} from '../../model/campaign.interface';
import {OrgDaoService} from '../../dao/OrgDao.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog, MatSnackBar} from '@angular/material';
import {EditStates} from '../../dao/collections.enum';
import {CampaignDaoService} from '../../dao/campaignDao.service';
import {CampaignItemAddComponent} from '../campaign-item-add/campaign-item-add.component';

@Component({
    selector: 'app-campaign-edit',
    templateUrl: './campaign-edit.component.html',
    styleUrls: ['./campaign-edit.component.scss']
})
export class CampaignEditComponent implements OnInit {

    formGrp: FormGroup;
    validations;
    private editState: EditStates = EditStates.add;
    public enCamp = enCampaignLbls;

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

    ngAfterViewInit(){
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
            data: {formGroup: this.builder.group( this.newCampaignItem())}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            const items = result;
        });
    }

}

