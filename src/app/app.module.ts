import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AppRoutingModule} from './app-routing.module';
import {environment} from '../environments/environment';
import { MainComponent } from './main/main.component';
import {OrganisationMenuModule} from './organisation.menu/organisation.menu.module';
import {CampaignMenuModule} from './campaign.menu/campaign.menu.module';
import {MaterialzModule} from './materialz/materialz.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TableOfOrgsComponent } from './organisation.menu/table-of-orgs/table-of-orgs.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,

  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule,
      AppRoutingModule,
      OrganisationMenuModule,
      CampaignMenuModule,
      MaterialzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
