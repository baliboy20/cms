import {Inject, Injectable, InjectionToken, Injector} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {ICampaign} from '../model/campaign.interface';
import {CampaignBuilderService} from '../utils/form-builders/campaign-builder.service';
import {BehaviorSubject, Observable, of, ReplaySubject, Subject} from 'rxjs';
import {QuickInputModule} from './quick-input.module';

/*~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~~-~~~~-~~~~-~~~~-~~~~-~~


~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~*/
@Injectable({
    providedIn: QuickInputModule
})
export class ViewModel {
    get selectedCampaignForm(): FormGroup {
        return this._selectedCampaignForm;
    }

    set selectedCampaignForm(value: FormGroup) {
        this.campaignValueChange.next(value);
        this._selectedCampaignForm = value;
    }

    get selectedOrgsForm(): FormGroup {
        return this._selectedOrgsForm;
    }

    set selectedOrgsForm(value: FormGroup) {
        this._selectedOrgsForm = value;
    }

    get selectedPeopleForm(): FormGroup {
        return this._selectedPeopleForm;
    }

    set selectedPeopleForm(value: FormGroup) {
        this._selectedPeopleForm = value;
    }
    get selectedCampaignItemForm(): FormGroup {
        return this._selectedCampaignItemForm;
    }

    set selectedCampaignItemForm(value: FormGroup) {
        this._selectedCampaignItemForm = value;
    }
    private _selectedCampaignForm: FormGroup;
    private _selectedCampaignItemForm: FormGroup;
    private _selectedOrgsForm: FormGroup;
    private _selectedPeopleForm: FormGroup;
    public campaignValueChange: Subject<any> = new ReplaySubject(1);
    public campaignItemValueChange: Subject<any> = new ReplaySubject(1);
    public orgItemValueChange:  Subject<any> = new ReplaySubject(1);
}

/*~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~~-~~~~-~~~~-~~~~-~~~~-~~


~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~~~-~~*/
@Injectable({
    providedIn: 'root'
})
export class FormControllerService {
    constructor(
        @Inject(CampaignBuilderService) private campBldr: CampaignBuilderService,
    ) {
        this.setupObservables();
        const a = Injector.create({providers: [{provide: ViewModel, deps: []}]});
        this.formStates = a.get(ViewModel);
        this.formStates.campaignItemValueChange.subscribe(b => console.log('form value dchangesin form', b));
    }

    /*
    STATES
     */
    formStates: ViewModel;


//  selected campaign
    //list of campaigns
    // create a new campaign
    /**
     * creates a new campaignForm based upon defaults plus a campaign Items
     *
     *
     */
    createDefaultCampaignFormWithItem(): FormGroup | null {
        [this.formStates.selectedCampaignForm, this.formStates.selectedCampaignItemForm]
            = this.campBldr.setupCampaignForm();
        console.log('qqq', this.formStates.selectedCampaignForm);
        return this.formStates.selectedCampaignForm;
    }

    createSelectedCampaignWithItems(vo: ICampaign): FormGroup | null {
        this.formStates.selectedCampaignForm = this.campBldr.setFrom(vo);
        return this.formStates.selectedCampaignForm;
    }

    addDefaultCampaignItem(parnetArray: FormArray) {
    }

    addSelectedCampaignItem(parentArray: FormArray) {
    }

    setupObservables() {

        // this.formStates.selectedCampaignForm.valueChanges(a => console.log(''))
    }

}

