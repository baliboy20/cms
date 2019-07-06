import {Component, Inject, OnInit} from '@angular/core';
import {GenericSubFormBuilderService, NEW_TELNO, NEW_WEB} from '../../../utils/form-builders/generic-subform-builder.service';
import {FormBuilder} from '@angular/forms';
import {EditableSFBase} from '../email-editable-sf/email-editable-sf.component';

@Component({
  selector: 'app-web-editable-sf',
  templateUrl: './web-editable-sf.component.html',
  styleUrls: ['./web-editable-sf.component.scss'],
  providers: [{
    provide: GenericSubFormBuilderService,
    useFactory: (a, b) => (new GenericSubFormBuilderService(a, b)),
    deps: [FormBuilder, NEW_WEB],
  }]
})
export class WebEditableSfComponent extends  EditableSFBase implements OnInit {

  constructor(@Inject(GenericSubFormBuilderService) srv: GenericSubFormBuilderService) {
    super(srv);
  }

  ngOnInit() {
  }

}
