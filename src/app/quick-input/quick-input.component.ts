import {Component, OnInit} from '@angular/core';
import {CampaignDaoService} from '../dao/campaignDao.service';
import {from, Observable, of} from 'rxjs';
import {CampaignBuilderService} from '../utils/form-builders/campaign-builder.service';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-quick-input',
    templateUrl: './quick-input.component.html',
    styleUrls: ['./quick-input.component.scss']
})
export class QuickInputComponent implements OnInit {
    get campaignItemRef() {
        return this._campaignItemRef;
    }

    set campaignItemRef(value) {
        this._campaignItemRef = value;
    }

    private _campaignItemRef;
    public campaignForm: FormGroup;
    campaigns$: Observable<any>;
    selectedCampaignId;
    step = -1;

    constructor(private campaignsDao: CampaignDaoService,
                private campaignBuilder: CampaignBuilderService ) {
        this.campaignForm = campaignBuilder.buildCampaignForm();
    }

    ngOnInit() {
        this.initData();
    }

    initData() {
        this.campaignsDao.getCampaignsDropdown()
            .subscribe(res => this.campaigns$ = of(res));
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

}
