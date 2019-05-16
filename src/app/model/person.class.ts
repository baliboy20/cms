import {ContactsFactory, IComment, IEmail, ITelNo, IWebSite} from './contact.classes';
import {Inject, Injectable} from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';

export class Person {

}


export interface IPerson {
    firstName: string;
    nickName: string;
    lastName: string;
    title: string;
    emails: IEmail[];
    web: IWebSite[];
    telNos: ITelNo[];
    entId: string;
    id: string;
    org?: { name: string, id: string };
}

@Injectable({
    providedIn: 'root',
})
export class PersonFactory {
    newTelNo = ContactsFactory.instOfTelnos();
    newEmailAdd: IEmail = ContactsFactory.instOfEmail();
    newWebItem: IWebSite = ContactsFactory.instOfWebsite();
    newCommItem: IComment = ContactsFactory.instOfComments();

    static scratchInstance() {
        const per: IPerson = {
            firstName: '',
            nickName: '',
            lastName: '',
            title: '',
            emails: [],
            web: [],
            telNos: [],
            id: 'xxx',
            entId: '',
            org: {id: 'unalloc', name: ''},
        };
        return per;
    }

    constructor(@Inject(FormBuilder) private  fm: FormBuilder) {
        }

    buildPersonForm() {
        const builder = this.fm;
        const emailsArr: FormArray = builder.array([builder.group(this.newEmailAdd)]);
        const telNosArr: FormArray = builder.array([builder.group(this.newTelNo)]);
        const webArr: FormArray = builder.array([builder.group(this.newWebItem)]);
        const commArr: FormArray = builder.array([builder.group(this.newCommItem)]);
        const orgArr: FormArray = builder.array([builder.group({name: 'xx', id: '1234'})]);

        const person: any = {
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            nickName: ['', Validators.required],
            title: ['', Validators.required],
            emails: emailsArr,
            telNos: telNosArr,
            web: webArr,
            comments: commArr,
            org: orgArr,
        };
        return person;
    }
}