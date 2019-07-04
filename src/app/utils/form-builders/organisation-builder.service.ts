import {Inject, Injectable} from '@angular/core';
import {IComment, IEmail, ITelNo, IWebSite} from '../../model/contact.classes';
import {FormArray, FormBuilder, Validators} from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class OrganisationBuilderService {

    instOfTelnos(): ITelNo {
        // return {telNo: null, note: null, id: null};
        return {telNo: '', note: ''};
    }

    instOfEmail(): IEmail {
        return {address: '', note: ''};
    }

    instOfWebsite(): IWebSite {
        return {address: '', note: ''};
    }

    instOfComments(): IComment {
        return {date: '', note: ''};
    }

    constructor(@Inject(FormBuilder) public builder: FormBuilder) {

    }

    buildOrgGroup() {
        const builder = this.builder;
        const emailsArr: FormArray = builder.array([builder.group(this.instOfEmail())]);
        const telNosArr: FormArray = builder.array([builder.group(this.instOfTelnos())]);
        const webArr: FormArray = builder.array([builder.group(this.instOfWebsite())]);
        const comms: FormArray = builder.array(([builder.group(this.instOfComments())]));

        const org: any = {
            id: 'xx',
            address: ['1234'],
            emails: emailsArr,
            name: ['Bt ltd', Validators.required],
            orgType: ['plc', Validators.required],
            sector: ['fin'],
            telNos: telNosArr,
            web: webArr,
        };
        return builder.group(org);
    }

    appendtoArrayGroup(arrayGroupName, arr) {
        switch (arrayGroupName) {
            case('emails'):
                arr.push(this.builder.group(this.instOfWebsite()));
                break;
            case('telNos'):
                arr.push(this.builder.group(this.instOfTelnos()));
                break;
            case('web'):
                arr.push(this.builder.group(this.instOfEmail()));
                break;
        }
    }

    appendTelno(arr: FormArray) {
        return arr.push(this.builder.group(this.instOfTelnos()));
    }

    appendEmail(arr: FormArray) {
        return arr.push(this.builder.group(this.instOfEmail()));
    }

    appendWebsite(arr: FormArray) {
        return arr.push(this.builder.group(this.instOfWebsite()));
    }

    deleteItem(arr: FormArray, idx) {
        if (arr.length - 1 < idx) {
            return;
        } else {
            arr.removeAt(idx);
        }
    }
}
