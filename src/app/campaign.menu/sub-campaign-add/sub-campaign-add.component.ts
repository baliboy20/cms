import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {CampaignBuilderService} from '../../utils/form-builders/campaign-builder.service';

@Component({
    selector: 'app-sub-campaign-add',
    templateUrl: './sub-campaign-add.component.html',
    styleUrls: ['./sub-campaign-add.component.scss']
})
export class SubCampaignAddComponent implements OnInit {
    createCampaignFlag = false;
    campId;
    campName;
    data = [
        {name: 'Hay', id: '123'},
        {name: 'BR', id: '3456'},
        {name: 'Shell', id: '4565y'},
        {name: 'Shell of Netherlands', id: '4565y'},
    ];
    campLookup$ = of(this.data);
    formGroupCam: FormGroup;

    constructor(private builder: CampaignBuilderService) {
    }

    ngOnInit() {
        this.initForm();
    }

    onKeydown(event: KeyboardEvent) {
        const val: string = (event.target as HTMLInputElement).value;
        if (val.length > 0) {
            this.campLookup$ = of(this.data.filter(a => a.name.includes(val)));
        } else if (val.length === 0) {
            this.campLookup$ = of(this.data);
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


}
