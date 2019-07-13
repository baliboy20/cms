import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {CampaignBuilderService} from '../../utils/form-builders/campaign-builder.service';
import {CampaignDaoService} from '../../dao/campaignDao.service';
import {endWith, filter, map, mergeMap, take, tap, toArray} from 'rxjs/operators';
import {FormControllerService} from '../../quick-input/form-controller.service';

@Component({
    selector: 'app-sub-campaign-add',
    templateUrl: './sub-campaign-add.component.html',
    styleUrls: ['./sub-campaign-add.component.scss']
})
export class SubCampaignAddComponent implements OnInit {
    createCampaignFlag = null;
    campId;
    campName;
    campLookup$: Observable<any>; // = of(this.data);
    get formGroupCam(): FormGroup {
        return this.formcontroller.formStates.selectedCampaignForm;
    }

    isCampaignChosen = false;
    showCols = true;
    @Output() campaigneSelected = new EventEmitter();

    constructor(
        private dao: CampaignDaoService,
        private formcontroller: FormControllerService,
        private builder: CampaignBuilderService) {
        this.campLookup$ = this.dao.getCampaignsDropdown();
        this.dao.getCampaignsDropdown().subscribe(console.log);

    }

    ngOnInit() {
        this.initForm();
    }

    onKeydown(event: KeyboardEvent) {


        const val: string = (event.target as HTMLInputElement).value;
        if (val.length > 0) {
            this.campLookup$ = this.dao.getCampaignsDropdown()
                .pipe(
                    map((a: any[]) => a.filter(b => b['name'].includes(val))));
        } else if (val.length === 0) {
            this.campLookup$ = this.dao.getCampaignsDropdown();
        }
    }


    initForm() {
        this.formcontroller.createDefaultCampaignFormWithItem();
    }

    addNew() {
        this.formcontroller.formStates.selectedCampaignForm  = this.formcontroller.createDefaultCampaignFormWithItem();
    }

    selectionChange(ev) {
        this.campId = ev.source.value.id;
        this.campName = ev.source.value.name;
    }

    displayFn(ev) {
        return ev.name;
    }

    //jame some changnes
    // hfdl
    doAfterCampSelectedContinue() {
        if (this.createCampaignFlag) {
            this.dao.insertCam(this.formGroupCam.getRawValue())
                .then(result => {
                    console.log('campaign added', result);
                    this.campId = result.id;
                    this.campaigneSelected.emit(this.campId);
                });
        } else {
            this.campaigneSelected.emit(this.campId);
        }
        this.showCols = false;
    }

    doReset() {
        this.formGroupCam.reset();
        this.createCampaignFlag = null;
        this.isCampaignChosen = false;
        this.campaigneSelected.emit('reset');
        this.showCols = true;
    }

    onCampaignSelected(ev) {
        this.formcontroller.formStates.selectedCampaignForm =
            this.formcontroller.createSelectedCampaignWithItems(ev);
       this.formcontroller
           .formStates
           .campaignValueChange
           .subscribe( (a: FormGroup) => {
               console.log('formname ', a);
               this.campName = a['controls']['name'].value;
               a['controls']['name'].valueChanges.subscribe(aa => this.campName = aa);
           });


    }


}
