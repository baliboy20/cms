import {Inject, Injectable} from '@angular/core';
import {ICampaign, ICampaignItem} from '../../model/campaign.interface';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class CampaignBuilderService {

    constructor(@Inject(FormBuilder) private builder: FormBuilder) {
    }

    campaignItemDefaults = {
        typeOfAction: ['Email..', Validators.required],
        orgId: [null, Validators.required],
        personsId: ['William'],
        notes: ['good luck with this', Validators.required],
        action: ['action', Validators.required],
        finishOn: ['03/05/2019', Validators.required],

        startOn: '23/03/2019',
        actionPriority: ['urgent', Validators.required],
        done: false,
        rating: ['HI'],
        status: 'list item',
    };

    campaignDefaults = {
        name: ['ddd', Validators.required],
        description: ['I am a very tall building', Validators.required],
        id: ['ff', Validators.required],
        items: []
    };

    private _initializeCampaignItemForm(): FormGroup {
        return this.builder.group({...this.campaignItemDefaults});
    }

    private _initializeCampaignForm(): FormGroup {
        return this.builder.group({...this.campaignDefaults, items: [this._initializeCampaignItemForm()]});
    }


    public initCampaignForm = () => this._initializeCampaignForm();
    public initCampaignItemForm = () => this._initializeCampaignItemForm();


    /**
     * @desc creates a new Campaign and Campaing subform using an existing vo
     * @param vo
     */
    setFrom(vo: ICampaign) {
        const fg: FormGroup = this.builder.group({
            name: [vo.name, Validators.required],
            description: [vo.description, Validators.required],
            id: [vo.id, Validators.required],
            items: [this._initializeCampaignItemForm()],
        });
        return fg;
    }
    /** @desc  adds a campaignItem */
    setItemInForm(arr: ICampaignItem[]) {
        if (arr === undefined || arr.length === 0) {
            return [];
        } else {
            const ar = arr.map(vo =>
                this.builder.group({
                    typeOfAction: [vo.typeOfAction, Validators.required],
                    orgId: [null, Validators.required],
                    personsId: [vo.personsId],
                    notes: [vo.notes, Validators.required],
                    action: [vo.action, Validators.required],
                    finishOn: [vo.finishOn, Validators.required],
                    startOn: vo.startOn,
                    actionPriority: [vo.actionPriority, Validators.required],
                    done: vo.done,
                    rating: vo.rating,
                    status: vo.status,
                }));
            return this.builder.array(ar);
        }
    }
}
