import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CampaignDaoService} from '../../dao/campaignDao.service';
import {FormArray, FormGroup} from '@angular/forms';
import {CampaignBuilderService} from '../../utils/form-builders/campaign-builder.service';
import {ACTION_NEEDED_VALUES, ACTION_PRIORITY_VALUES} from '../../utils/staticData/staticData';
import {OrganisationBuilderService} from '../../utils/form-builders/organisation-builder.service';
import {OrgDaoService} from '../../dao/OrgDao.service';
import {PeopleBuilderService} from '../../utils/form-builders/people-builder.service';
import {ORG_SECTORS, ORG_TYPES} from '../../dao/collections.enum';
import {Observable, of} from 'rxjs';

@Component({
    selector: 'app-campaign-item-add-stepper',
    templateUrl: './campaign-item-add-stepper.component.html',
    styleUrls: ['./campaign-item-add-stepper.component.scss']
})
export class CampaignItemAddStepperComponent implements OnInit {
    @Input() public campaignId: string;
    @Output() public itemRef: EventEmitter<any> = new EventEmitter<any>();
    public campaignItems$;
    public campaigns$: Observable<any>;
    public organisations$;
    public persons$;
    public someVal = 'here is some data';
    public formGroupCamp: FormGroup;
    public formGroupCI: FormGroup;
    public formGroupOrg: FormGroup;
    public formGroupPerson: FormGroup;
    public showAddForm = false;
    public actionPriorities = ACTION_PRIORITY_VALUES;
    public actionNeeded = ACTION_NEEDED_VALUES;
    public sectors = ORG_SECTORS;
    public orgType = ORG_TYPES;
    public selectedCampaign;
    cContext;
    someval = 99;

    constructor(private camBuilder: CampaignBuilderService,
                private orgBuilder: OrganisationBuilderService,
                public  peopleBuilder: PeopleBuilderService,
                private daoP: OrgDaoService,
                private dao: CampaignDaoService) {
        this.formGroupCI = this.camBuilder.newCampaignItemFormGroup();
        this.formGroupOrg = this.orgBuilder.buildOrgGroup();
        this.formGroupPerson = peopleBuilder.buildPersonForm();
        this.formGroupCamp = camBuilder.buildCampaignForm();
    }

    ngOnInit() {
        this.populatedata();
        this.cContext = {
            fg: this.formGroupPerson,
            arrayName: 'telNos',
        };
    }

    self() {
        console.log('self', this);
        return this;
    }

    populatedata() {
        this.dao.getCampaignItems(this.campaignId).subscribe(a => this.campaignItems$ = a);
        this.daoP.getPeople().subscribe(a => this.persons$ = a);
        this.daoP.getOrgs().subscribe(a => this.organisations$ = a);
        this.dao.getCampaignsDropdown().subscribe(res => this.campaigns$ = of(res));

    }

    insertRow(fg: FormGroup, controlName: string) {
        console.log('fg', fg, 'controlName', controlName);
        switch (controlName) {
            case 'telNos':
                this.peopleBuilder.appendTelno(fg.get(controlName) as FormArray);
                break;
            case 'web':
                this.peopleBuilder.appendWebsite(fg.get(controlName) as FormArray);
                break;
            case 'emails':
                this.peopleBuilder.appendEmail(fg.get(controlName) as FormArray);
                break;
        }
        console.log('FORMBUILDER', controlName, fg, fg.getRawValue());
    }

    deleteRow(fg: FormGroup, idx: number, controlName: string) {
        (fg.get(controlName) as FormArray).removeAt(idx);
        console.log('Delte owor');
    }

    selectionChangeSector($event) {
        console.log('sectorSelectionChanged($event)', this.formGroupOrg.getRawValue());
    }


}
