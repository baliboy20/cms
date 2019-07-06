import {Component, Inject, Input, OnInit} from '@angular/core';
import {EditableSFBase} from '../email-editable-sf/email-editable-sf.component';
import {GenericSubFormBuilderService, NEW_EMAIL, NEW_TELNO} from '../../../utils/form-builders/generic-subform-builder.service';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';


// export class EditableSFBase1 {
//   constructor( private srv: GenericSubFormBuilderService) { }
//
//  @Input() fm: FormGroup;
//
//   @Input('farn') formArrayName: string;
//   addItem(arrName) {
//     this.srv.append(this.fm.get( this.formArrayName) as FormArray);
//   }
//
//   deleteItem(arrName, event) {
//     console.log('deleting', event);
//     this.srv.delete(this.fm.get( this.formArrayName) as FormArray, event);
//   }
//   getFormArrayControls(): FormArray {
//     // const a = this.fm.controls[this.formArrayName]  as FormArray;
//     const a = this.fm.get( this.formArrayName)['controls']  as FormArray;
//     // console.log('consteol array', a);
//     return a;
//   }
// }


@Component({
  selector: 'app-telno-editable-sf',
  templateUrl: './telno-editable-sf.component.html',
  styleUrls: ['./telno-editable-sf.component.scss'],
  providers: [{
    provide: GenericSubFormBuilderService,
    useFactory: (a, b) => (new GenericSubFormBuilderService(a, b)),
    deps: [FormBuilder, NEW_TELNO],
  }]
})
export class TelnoEditableSfComponent extends EditableSFBase implements OnInit {

  constructor(@Inject(GenericSubFormBuilderService) srv: GenericSubFormBuilderService) {
    super(srv);
  }

  ngOnInit() {
  }

}
