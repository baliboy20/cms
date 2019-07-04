import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {CampaignBuilderService} from '../../utils/form-builders/campaign-builder.service';
import {CampaignDaoService} from '../../dao/campaignDao.service';
import {endWith, filter, map, mergeMap, take, tap, toArray} from 'rxjs/operators';

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
    formGroupCam: FormGroup;
    isCampaignChosen = false;
    showCols = true;
    @Output() campaigneSelected = new EventEmitter();

    constructor(
        private dao: CampaignDaoService,
        private builder: CampaignBuilderService) {
        this.campLookup$ = this.dao.getCampaignsDropdown();
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
        this.formGroupCam = this.builder.buildCampaignForm();
    }

    selectionChange(ev) {
        this.campId = ev.source.value.id;
        this.campName = ev.source.value.name;
    }

    displayFn(ev) {
        return ev.name;
    }

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


}
