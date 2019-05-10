import {Component, OnInit} from '@angular/core';
import {CampaignFactory, enCampaignLbls, ICampaign} from '../../model/campaign.interface';
import {OrgDaoService} from '../../dao/OrgDao.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {EditStates} from '../../dao/collections.enum';

@Component({
    selector: 'app-campaign-edit',
    templateUrl: './campaign-edit.component.html',
    styleUrls: ['./campaign-edit.component.scss']
})
export class CampaignEditComponent implements OnInit {

    formGrp: FormGroup;
    validations;
    private editState: EditStates = EditStates.add;
    private enCamp = enCampaignLbls;

    constructor(public campaignFactory: CampaignFactory,
                private builder: FormBuilder,
                private route: ActivatedRoute,
                private snackBar: MatSnackBar,
                private dao: OrgDaoService) {
        this.formGrp = campaignFactory.buildCampaignForm();
    }

    ngOnInit() {


    }

    onSave(idx) {

    }

    onAbandon() {
    }

    onReset() {
    }

    newCampaignItem() {
        return this.campaignFactory.newItem();
    }

}

