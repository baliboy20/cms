import {Inject, Injectable} from '@angular/core';
import {IComment, IEmail, ITelNo, IWebSite} from '../../model/contact.classes';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {IOrganisation} from '../../model/organisation.interface';
import {isNull} from 'util';
import {isEmpty} from 'rxjs/operators';
import {NEW_DEPARTMENT} from './generic-subform-builder.service';

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

    constructor(
        @Inject(NEW_DEPARTMENT) private dep: any,
        @Inject(FormBuilder) public builder: FormBuilder) {
    }

    buildGroup(arg: IOrganisation) {
        const builder = this.builder;
        const emailsArr: FormArray = builder.array([builder.group(this.instOfEmail())]);
        const telNosArr: FormArray = builder.array([builder.group(this.instOfTelnos())]);
        const webArr: FormArray = builder.array([builder.group(this.instOfWebsite())]);
        const comms: FormArray = builder.array(([builder.group(this.instOfComments())]));
        const deps: FormArray = builder.array(([this.dep]));
        if (arg !== undefined && arg !== null) {
            return this.builder.group( {
                id: arg.id,
                address: [arg.address],
                emails: arg.emails,
                name: [arg.name, Validators.required],
                orgType: [arg.orgType, Validators.required],
                sector: [arg.sector],
                telNos: arg.telNos,
                web: arg.web,
                departments: arg.departments,
            });
        } else {
            return this.builder.group({
                id: 'xx',
                address: ['1234'],
                emails: emailsArr,
                name: ['Bt ltd', Validators.required],
                orgType: ['plc', Validators.required],
                sector: ['fin'],
                telNos: telNosArr,
                web: webArr,
                departments: this.dep,
            });
        }
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
            case('departments') :
                arr.push(this.dep);
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
