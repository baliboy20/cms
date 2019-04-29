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
import { TableOfOrgsComponent } from './organisation.menu/organisation-search/organisation-search.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {HttpClientModule} from '@angular/common/http';
import { CommSFormComponent } from './shared/comms-sform/comms-sform.component';

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
      HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
