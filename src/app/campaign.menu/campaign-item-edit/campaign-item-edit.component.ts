import {Component, HostListener, Input, OnInit, Renderer2, TemplateRef, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {SubformTableComponent} from '../../utils/subform-table/subform-table.component';
import {enCampaignItemLbls} from '../../model/campaign.interface';
import {StaticData} from '../../model/standingData.class';
import {CampaignDaoService} from '../../dao/campaignDao.service';
import {OrgDaoService} from '../../dao/OrgDao.service';
import {Observable} from 'rxjs';
import {ORG_SECTORS} from '../../dao/collections.enum';

@Component({
  selector: 'app-campaign-item-edit',
  templateUrl: './campaign-item-edit.component.html',
  styleUrls: ['./campaign-item-edit.component.scss']
})
export class CampaignItemEditComponent implements OnInit {

    private _formGrp: FormGroup;
    orgs = [];
    sectors = ORG_SECTORS;
    @Input() template: TemplateRef<any>;
    @Input() formArrayName: string;
    @Input() newItem: any;


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

    @ViewChild('addItemFunc', {static: true}) set addAnchor(e: any) {
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
