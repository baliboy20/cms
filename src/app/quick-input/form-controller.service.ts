import { Injectable } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControllerService {

  constructor() { }


//  selected campaign
  //list of campaigns
  // create a new campaign
  /**
   * creates a new campaignForm based upon defaults plus a campaign Items
   *
   *
   */
  createDefaultCampaignFormWithItem(): FormGroup | null {
    return null;
  }
  createSelectedCampaignWithItems(vo: Icampaign): FormGroup | null {
    return null;
}

add

}
