import {FormArray, FormGroup} from '@angular/forms';

export interface ISFBuilder<T> {
    instOf(): T;

    build(): FormArray;

    append(arr: FormArray): any;

    delete(arr: FormArray, idx: number);
}
