import {Pipe, PipeTransform} from '@angular/core';
// import Timestamp = firebase.firestore.Timestamp;
import {AngularFirestore} from '@angular/fire/firestore';

import {isDate} from 'util';

@Pipe({
    name: 'toDate'
})
export class ToDatePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (value.constructor.name === 'Timestamp') {
            return (new Date(value.seconds * 1000)).toLocaleDateString();
        } else {
            return new Date(value).toLocaleDateString();
        }
    }

}
