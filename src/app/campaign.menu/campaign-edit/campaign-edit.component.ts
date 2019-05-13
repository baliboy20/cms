import {Component, OnInit} from '@angular/core';
import {CampaignFactory, enCampaignLbls, ICampaign} from '../../model/campaign.interface';
import {OrgDaoService} from '../../dao/OrgDao.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {EditStates} from '../../dao/collections.enum';
import {CampaignDaoService} from '../../dao/campaignDao.service';

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
                private dao: CampaignDaoService) {
        this.formGrp = campaignFactory.buildCampaignForm();
    }

    ngOnInit() {


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

}

