import {Inject, Injectable} from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';

export enum enCampaignLbls {
    name = 'Campaign Title',
    description = 'Overview',
    campaignItems = 'campaignItems',
}


export interface ICampaign {
    name: string;
    descripton: string;
    campaignItems: ICampaignItem[];
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
    dueDate = 'Complete by',
    actionPriority = 'priority',
    done = 'is Complete',
    rating = 'importance', // 1 - 5;
    targetStartDate = 'Starting on',
    personsId = 'Contact',
    orgId = 'Organisation',
    notes = 'Comments',
}

interface ICampaignItem {
    typeOfAction: string;
    action: string;
    dueDate: Date;
    actionPriority: 'Hi' | 'Low' | 'Med' | 'Urge';
    done: boolean;
    rating: 1 | 2 | 3 | 4 | 5;
    targetStartDate: Date;
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
        orgId: ['Oxfam', Validators.required],
        PersonsId : ['jackie'],
        notes: ['dsfssdfsdfs', Validators.required],
        action: ['action', Validators.required],
        dueDate: ['dueDate', Validators.required],
        targetStartDate: 'targetStartDate:',
        actionPriority: ['actionPriority', Validators.required],
        done: ['done'],
        rating: 'rating',
    };

    constructor(@Inject(FormBuilder) private builder: FormBuilder) {
    }

    buildCampaignForm() {

        return this.builder.group(
            {
                name: ['ddd', Validators.required],
                description: ['eee', Validators.required],
                id: ['ff', Validators.required],
                items: this.builder.array([this.builder.group(this.CampaignItem)]),
            });
    }

    newItem() {
        return this.CampaignItem;
    }
}
