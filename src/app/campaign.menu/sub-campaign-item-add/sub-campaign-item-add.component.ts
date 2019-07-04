import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {OrganisationBuilderService} from '../../utils/form-builders/organisation-builder.service';
import {OrgDaoService} from '../../dao/OrgDao.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material';

@Component({
  selector: 'app-sub-campaign-item-add',
  templateUrl: './sub-campaign-item-add.component.html',
  styleUrls: ['./sub-campaign-item-add.component.scss', '../sub-campaign-add/sub-campaign-add.component.scss']
})
export class SubCampaignItemAddComponent implements OnInit {

  formGroupOrg: FormGroup;
  orgId: string;
  orgName = 'Simmons Ltd';
  newOrgFlag: boolean;
  orgsDrpDwn$: Observable<any>;
  me = this;
  constructor(
      private orgBuilder: OrganisationBuilderService,
      private dao: OrgDaoService,
  ) {
    this.orgsDrpDwn$ = this.dao.enterprises$;
  }
  ngOnInit() {
    this.formGroupOrg = this.orgBuilder.buildOrgGroup();
    this.newOrgFlag = true;
  }
  addItem(arrName) {
    this.orgBuilder.appendTelno(this.formGroupOrg.get(arrName) as FormArray);
  }

  deleteItem(arrName, event) {
    console.log('deleting', event);
    this.orgBuilder.deleteItem(this.formGroupOrg.get(arrName) as FormArray, event);
  }

  onKeyup(event) {
    console.log('onKeyup', event);
    const ele: HTMLInputElement = event.target as HTMLInputElement;
    this.orgsDrpDwn$ = this.dao.enterprises$.pipe(map(a =>  a.filter(b => b.name.includes(ele.value))));
  }
  displayWithFn(val) {
    // console.log('displayEith', val);
    return val.name;
  }
  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    console.log('onOptionSelected', event.option.value);
    this.orgId = event.option.value.id;
    this.orgName = event.option.value.name;
  }

}
