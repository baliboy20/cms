import {Inject, Injectable, Optional} from '@angular/core';
import {IComment, IEmail, ITelNo, IWebSite} from '../../model/contact.classes';
import {FormArray, FormBuilder, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PeopleBuilderService {

  instOfTelnos(): ITelNo {
    // return {telNo: null, note: null, id: null};
    return {telNo: '333', note: 'London nombre'};
  }

  instOfEmail(): IEmail {
    return {address: 'emailaddress@site.com', note: 'My holiday email'};
  }

  instOfWebsite(): IWebSite {
    return {address: 'WWW.dep.org', note: ''};
  }

  instOfComments(): IComment {
    return {date: 'Very good', note: ''};
  }

  constructor( @Inject(FormBuilder) public builder: FormBuilder) {

  }

  // buildOrgGroup() {
  //   const builder = this.builder;
  //   const emailsArr: FormArray = builder.array([builder.group(this.instOfEmail())]);
  //   const telNosArr: FormArray = builder.array([builder.group(this.instOfTelnos())]);
  //   const webArr: FormArray = builder.array([builder.group(this.instOfWebsite())]);
  //   const comms: FormArray = builder.array(([builder.group(this.instOfComments())]))
  //
  //   const org: any = {
  //     id: 'xx',
  //     address: [''],
  //     emails: emailsArr,
  //     name: ['', Validators.required],
  //     orgType: ['', Validators.required],
  //     sector: [''],
  //     telNos: [],
  //     web: [],
  //   };
  //   return builder.group(org);
  // }


  buildPersonForm() {
    const builder = this.builder;
    // const emailsArr: FormArray = builder.array([builder.group(this.instOfEmail())]);
    // const telNosArr: FormArray = builder.array([builder.group(this.instOfTelnos())]);
    // const webArr: FormArray = builder.array([builder.group(this.instOfWebsite())]);
    // const comms: FormArray = builder.array(([builder.group(this.instOfComments())]));
    const formArrayBld = (a) => builder.array([builder.group(a())])

    const person: any = {
      firstName: ['fn', Validators.required],
      lastName: ['ln', Validators.required],
      nickName: ['nk', Validators.required],
      title: ['tit', Validators.required],
      emails: formArrayBld(this.instOfEmail),
      telNos: formArrayBld(this.instOfTelnos),
      web: formArrayBld(this.instOfWebsite),
      comments: formArrayBld(this.instOfComments),
      org: null
    };
    return builder.group(person);
  }

  public appendTelno(arr: FormArray) {
    console.log('app arr', arr);
    return arr.push(this.builder.group(this.instOfTelnos()));
  }

  public appendEmail(arr: FormArray) {
    console.log('builder', this.builder);
    return arr.push(this.builder.group(this.instOfEmail()));
  }

  public appendWebsite(arr: FormArray) {
    return arr.push(this.builder.group(this.instOfWebsite()));
  }
}
