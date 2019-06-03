import {Component, Inject, Input, OnInit, Renderer2, TemplateRef, ViewChild} from '@angular/core';
import {CampaignFactory, enCampaignItemLbls, enCampaignLbls} from '../../model/campaign.interface';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {EditStates} from '../../dao/collections.enum';
import {CampaignDaoService} from '../../dao/campaignDao.service';
import {ActivatedRoute} from '@angular/router';
import {OrgDaoService} from '../../dao/OrgDao.service';
import {StaticData} from '../../model/standingData.class';
import {SubformTableComponent} from '../../utils/subform-table/subform-table.component';

@Component({
    selector: 'app-campaign-item-add',
    templateUrl: './campaign-item-add.component.html',
    styleUrls: ['./campaign-item-add.component.scss']
})
export class CampaignItemAddComponent implements OnInit {

     _formGrp: FormGroup;
    orgs = [];
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


    constructor(private rnd: Renderer2,
                public dialogRef: MatDialogRef<any>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private dao: CampaignDaoService,
                public campaignFactory: CampaignFactory,
                private builder: FormBuilder) {

        console.log('form group', data.formGroup);
    }

    ngOnInit() {
        console.log('ssdfsdfds', this.campaignFactory.newItem())
        this._formGrp = this.builder.group(this.campaignFactory.newItem());
    }

    ngAfterViewInit() {

        // .valueChanges
        // .subscribe(a => );
        //this.getOrgs();


    }

    onOK() {

    }

    onCancel() {
    }
}
