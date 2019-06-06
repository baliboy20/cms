import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CampaignDaoService} from '../../dao/campaignDao.service';
import {FormGroup} from '@angular/forms';
import {CampaignBuilderService} from '../../utils/form-builders/campaign-builder.service';

@Component({
    selector: 'app-campaign-item-add-stepper',
    templateUrl: './campaign-item-add-stepper.component.html',
    styleUrls: ['./campaign-item-add-stepper.component.scss']
})
export class CampaignItemAddStepperComponent implements OnInit {
    @Input() public campaignId: string;
    @Output() public itemRef: EventEmitter<any> = new EventEmitter<any>();
    public campaignItems$;
    public someVal = 'here is some data';
    public formGroupCamp: FormGroup;
    public formGroupCI: FormGroup;
    public formGroupOrg: FormGroup;
    public formGroupPerson: FormGroup;
    public showAddForm = true;

    constructor(
        private camBuilder: CampaignBuilderService,
        private dao: CampaignDaoService) {
        this.formGroupCI = this.camBuilder.newCampaignItemFormGroup();
    }

    ngOnInit() {
        this.populatedata();
    }

    populatedata() {
        this.dao.getCampaignItems(this.campaignId).subscribe(a => this.campaignItems$ = a);
    }


}
