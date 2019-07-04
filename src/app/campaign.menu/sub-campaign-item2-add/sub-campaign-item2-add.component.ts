import { Component, OnInit } from '@angular/core';
import {CampaignBuilderService} from '../../utils/form-builders/campaign-builder.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sub-campaign-item2-add',
  templateUrl: './sub-campaign-item2-add.component.html',
  styleUrls: ['./sub-campaign-item2-add.component.scss']
})
export class SubCampaignItem2AddComponent implements OnInit {

  formGroup: FormGroup;
  done = true;
  constructor(private builder: CampaignBuilderService) { }

  ngOnInit() {
    this.formGroup = this.builder.newCampaignItemFormGroup();
  }

}
