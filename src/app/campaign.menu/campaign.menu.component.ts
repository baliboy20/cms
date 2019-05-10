import {Component, OnInit} from '@angular/core';
import {EditStates} from '../dao/collections.enum';
import {FormBuilder, FormGroup} from '@angular/forms';
import {OrgDaoService} from '../dao/OrgDao.service';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {PersonFactory} from '../model/person.class';

@Component({
    selector: 'app-campaign.menu',
    templateUrl: './campaign.menu.component.html',
    styleUrls: ['./campaign.menu.component.css']
})
export class CampaignMenuComponent {


    /*
    name: string;
    id: string;
    persons: {pesonId: string, fullname: string, contactby: string}[];
    notes: string[];
    action: string;
    actionDate: Date;
    actionPriority: 'Hi' | 'Low' | 'Med' | 'Urge';
    done: boolean;
     */

    constructor() {


    }


}


