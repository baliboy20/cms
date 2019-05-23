import {Component, Input, OnInit, Renderer2, TemplateRef, ViewChild} from '@angular/core';
import {CampaignFactory, enCampaignItemLbls, enCampaignLbls} from '../../model/campaign.interface';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {EditStates} from '../../dao/collections.enum';
import {CampaignDaoService} from '../../dao/campaignDao.service';
import {ActivatedRoute} from '@angular/router';
import {OrgDaoService} from '../../dao/OrgDao.service';
import {StaticData} from '../../model/standingData.class';
import {SubformTableComponent} from '../../utils/subform-table/subform-table.component';

@Component({
  selector: 'app-campaign-item-add',
  templateUrl: './campaign-item-add.component.html',
  styleUrls: ['./campaign-item-add.component.css']
})
export class CampaignItemAddComponent implements OnInit {

    private _formGrp: FormGroup;
    orgs = [];
    @Input() template: TemplateRef<any>;
    @Input() formArrayName: string;
    @Input() newItem: any;
    @Input() idx: any;


    lbs = enCampaignItemLbls;
    priorities = StaticData.ACTION_PRIORITY_VALUES;
    actionNeeded = StaticData.ACTION_NEEDED_VALUES;


    get me(): SubformTableComponent {
        return (this as  any);
    }

    @Input() set formGroup(arg: FormGroup) {
        this._formGrp = arg;
        // console.log('orgId has changed', this.formGroup.controls. );
    }

    get formGroup(): FormGroup {
        return this._formGrp;
    }

    @ViewChild('addItemFunc') set addAnchor(e: any) {
    }

    private getFormArray(): FormArray {
        return this._formGrp.get(this.formArrayName) as FormArray;
    }

    getOrgs() {
        this.daoOrgs.enterprises$
            .subscribe(res => {

                this.orgs = res;
                console.log('camp edit', res, this.orgs);
            });
    }

    addItem(e: Event) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const fg = this.builder.group(this.newItem);
        const fc: FormArray = this.getFormArray();
        fc.push(fg);
    }

    deleteItem(e, idx) {
        e.preventDefault();
        e.stopImmediatePropagation();
        this.getFormArray().removeAt(idx);
    }


    constructor(private rnd: Renderer2,
                private dao: CampaignDaoService,
                private daoOrgs: OrgDaoService,
                private builder: FormBuilder) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {

        // .valueChanges
        // .subscribe(a => );
        this.getOrgs();

    }

}
