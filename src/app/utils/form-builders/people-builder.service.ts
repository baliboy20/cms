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

  buildPersonForm() {
    const builder = this.builder;
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


  deleteItem(arr: FormArray, idx) {
    if (arr.length  < 1) {
      return;
    } else {
      arr.removeAt(idx);
    }
  }
}
