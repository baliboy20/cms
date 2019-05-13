import {Inject, Injectable} from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';

export enum enCampaignLbls {
    name = 'Campaign Title',
    description = 'Overview',
    campaignItems = 'campaignItems',
}


export interface ICampaign {
    name: string;
    description: string;
    items: ICampaignItem[];
    id?: string;
}

// class Campaign implements ICampaign {
//     name: string;
//     [enumCampaignFields.descripton]: string;
//     [enumCampaignFields.campaignItems]: ICampaignItem[];
// }

export enum enCampaignItemLbls {
    typeOfAction = 'Type of Action',
    action = 'Action needed',
    finishOn = 'Complete by',
    actionPriority = 'priority',
    done = 'is Complete',
    rating = 'importance', // 1 - 5;
    startOn = 'Starting on',
    personsId = 'Contact',
    orgId = 'Organisation',
    notes = 'Description/Note',
}

export interface ICampaignItem {
    typeOfAction: string;
    action: string;
    finishOn: Date;
    actionPriority: 'Hi' | 'Low' | 'Med' | 'Urge';
    done: boolean;
    rating: 1 | 2 | 3 | 4 | 5;
    startOn: Date;
    id: string;
    personsId: string;
    orgId: string;
    notes: string[];
}

@Injectable({
    providedIn: 'root',
})
export class CampaignFactory {

    CampaignItem = {
        id: ['idxxx', Validators.required],
        typeOfAction: ['typeOfAction: ', Validators.required],
        orgId: [null, Validators.required],
        personsId : ['jackie'],
        notes: ['some notes for the hwll of it', Validators.required],
        action: ['action', Validators.required],
        finishOn: ['03/05/2019', Validators.required],
        startOn: '23/03/2019',
        actionPriority: ['actionPriority', Validators.required],
        done: [true],
        rating: 'rating',
    };

    constructor(@Inject(FormBuilder) private builder: FormBuilder) {
    }

    buildCampaignForm() {

        return this.builder.group(
            {
                name: ['ddd', Validators.required],
                description: ['I am a very tall building', Validators.required],
                id: ['ff', Validators.required],
                items: this.builder.array([this.builder.group(this.CampaignItem)]),
            });
    }

    newItem() {
        return this.CampaignItem;
    }
}
/**



 * */