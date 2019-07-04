import {Component, OnInit, ViewChild} from '@angular/core';
import {CampaignDaoService} from '../dao/campaignDao.service';
import {from, Observable, of} from 'rxjs';
import {CampaignBuilderService} from '../utils/form-builders/campaign-builder.service';
import {FormGroup, ValidationErrors} from '@angular/forms';
import {SubCampaignItemAddComponent} from '../campaign.menu/sub-campaign-item-add/sub-campaign-item-add.component';
import {SubCampaignAddComponent} from '../campaign.menu/sub-campaign-add/sub-campaign-add.component';

@Component({
    selector: 'app-quick-input',
    templateUrl: './quick-input.component.html',
    styleUrls: ['./quick-input.component.scss']
})
export class QuickInputComponent implements OnInit {
    private _campaignForm: FormGroup;

    @ViewChild(SubCampaignAddComponent, {static: true}) set campcomp(arg: any) {
        this._campaignForm = arg.formGroupOrg;
    }

    campaigns$: Observable<any>;
    selectedCampaignId;
    campSelected = true;
    step = -1;

    constructor() {
    }

    ngOnInit() {
    }

    initBuilders() {
    }

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }

    campaignSelectionChange(event) {
        console.log('campaing clicked', event.value);
        this.selectedCampaignId = event.value;
    }

    CampaignItemRef(ev) {
    }

    saveAll() {

        console.log('Save all', this.campcomp);

    }

    onCampaigneSelected(campForm) {
        console.log('Camp select4ed', campForm);
        if (campForm === 'reset') {
            this.campSelected = false;
        } else {
            this.campSelected = true;
        }

    }

}
