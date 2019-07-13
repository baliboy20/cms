import {Inject, Injectable, InjectionToken, Injector} from '@angular/core';
import {ISFBuilder} from './isfbuilder';
import {FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import {IComment, IEmail, ITelNo, IWebSite} from '../../model/contact.classes';
import {IDepartment} from '../../model/department.interface';


// @Injectable({
//     providedIn: 'root'
// })
// export class GenericSubformBuilderService implements ISFBuilder<IEmail> {
//     instOf(): IEmail {
//         return {address: '', note: ''} as IEmail;
//     }
//
//     constructor(@Inject(FormBuilder) public builder: FormBuilder) {
//     }
//
//     build(): FormArray {
//         return this.builder.array([this.builder.group(this.instOf())]);
//     }
//
//     append(arr: FormArray) {
//         arr.push(this.builder.group(this.instOf()));
//     }
//
//     delete(arr: FormArray, idx: number) {
//         arr.removeAt(idx);
//     }
//
// }

export const NEW_EMAIL = new InjectionToken<any>('NEW_EMAIL', {
    providedIn: 'root',
    factory: () => Object.assign({}, {address: '2111', note: 'oldies 111'}),

});


export const NEW_TELNO = new InjectionToken<any>('NEW_TELNO', {
    providedIn: 'root',
    factory: () => Object.assign({}, {telNo: '333', note: 'London nombre'}),

});

export const NEW_WEB = new InjectionToken<any>('NEW_WEB', {
    providedIn: 'root',
    factory: () => Object.assign({}, {address: 'WWW.dep.org', note: ''}),

});

export const NEW_COMMENT = new InjectionToken<any>('NEW_COMMENT', {
    providedIn: 'root',
    factory: () => Object.assign({}, {date: 'Very good', note: ''}),

});

export const NEW_DEPARTMENT = new InjectionToken<any>('NEW_DEPARTMENT', {
    providedIn: 'root',
    factory: () => Object.assign({}, {address: 'aaaaddd', employees: [], name: ['nnnnmm', Validators.required], note: 'noooooote'}),

});

// export const d: IDepartment = {address: '', employees: [], name: '', note: ''}


// @Injectable({
//     providedIn: 'root'
// })
export class GenericSubFormBuilderService {
    instOf(): any {
        return Object.assign({}, this.newInst);
    }

    constructor( public builder: FormBuilder,  public newInst: any) {
        // console.log('hello william in the srvice', newInst);
    }

    build(): FormArray {
        return this.builder.array([this.builder.group(this.instOf())]);
    }

    append(arr: FormArray) {
        arr.push(this.builder.group(this.instOf()));
    }

    delete(arr: FormArray, idx: number) {
        arr.removeAt(idx);
        if (arr.length === 0 ) {
            this.append(arr);
        }
    }

}
