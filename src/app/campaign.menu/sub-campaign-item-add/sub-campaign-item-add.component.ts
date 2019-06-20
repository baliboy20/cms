import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {OrganisationBuilderService} from '../../utils/form-builders/organisation-builder.service';

@Component({
  selector: 'app-sub-campaign-item-add',
  templateUrl: './sub-campaign-item-add.component.html',
  styleUrls: ['./sub-campaign-item-add.component.scss', '../sub-campaign-add/sub-campaign-add.component.scss']
})
export class SubCampaignItemAddComponent implements OnInit {

  formGroupOrg: FormGroup;
  orgId: string;
  orgName = 'Simmons Ltd';
  newOrgFlag = true;
  constructor(
      private orgBuilder: OrganisationBuilderService,
  ) { }
  ngOnInit() {
    this.formGroupOrg = this.orgBuilder.buildOrgGroup();
  }

}
