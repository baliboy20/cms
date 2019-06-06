import {Inject, Injectable} from '@angular/core';
import {ICampaignItem} from '../../model/campaign.interface';
import {FormBuilder, Validators} from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class CampaignBuilderService {

    CampaignItem = {
        typeOfAction: ['Email..', Validators.required],
        orgId: [null, Validators.required],
        personsId: ['William'],
        notes: ['good luck with this', Validators.required],
        action: ['action', Validators.required],
        finishOn: ['03/05/2019', Validators.required],
        startOn: '23/03/2019',
        actionPriority: ['urgent', Validators.required],
        done: [true],
        rating: ['HI'],
    };

    constructor(@Inject(FormBuilder) private builder: FormBuilder) {
    }

    sayHello() {
        return 'Hello form CampaignBuilder';
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
    newCampaignItemFormGroup() {
        return this.builder.group(this.CampaignItem);
    }

    appendItem(value: ICampaignItem) {
        return this.builder.group({
            typeOfAction: [value.typeOfAction, Validators.required],
            orgId: [null, Validators.required],
            personsId: [value.personsId],
            notes: [value.notes, Validators.required],
            action: [value.action, Validators.required],
            finishOn: [value.finishOn, Validators.required],
            startOn: value.startOn,
            actionPriority: [value.actionPriority, Validators.required],
            done: value.done,
            rating: value.rating,
        });
    }
}
