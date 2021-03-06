import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AppRoutingModule} from './app-routing.module';
import {environment} from '../environments/environment';
import {MainComponent} from './main/main.component';
import {OrganisationMenuModule} from './organisation.menu/organisation.menu.module';
import {CampaignMenuModule} from './campaign.menu/campaign.menu.module';
import {MaterialzModule} from './materialz/materialz.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableOfOrgsComponent} from './organisation.menu/organisation-search/organisation-search.component';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {HttpClientModule} from '@angular/common/http';
import {CommSFormComponent} from './shared/comms-sform/comms-sform.component';
import {OrgDaoService} from './dao/OrgDao.service';
import {PersonFactory} from './model/person.class';
import {CampaignFactory} from './model/campaign.interface';
import {CampaignDaoService} from './dao/campaignDao.service';
import { ToDatePipe } from './utils/pipe/to-date.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QuickInputComponent } from './quick-input/quick-input.component';
import {QuickInputModule} from './quick-input/quick-input.module';
import {CampaignBuilderService} from './utils/form-builders/campaign-builder.service';
import {PeopleBuilderService} from './utils/form-builders/people-builder.service';
import { SpyPipe } from './utils/pipes/spy.pipe';
import {UtilsModule} from './utils/utils.module';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        SpyPipe,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule.enablePersistence(),
        AppRoutingModule,
        OrganisationMenuModule,
        CampaignMenuModule,
        QuickInputModule,
        MaterialzModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        UtilsModule,
    ],
    providers: [
        AngularFirestore,
        OrgDaoService,
        CampaignDaoService,
        CampaignBuilderService,
        CampaignFactory,
        PersonFactory,
        PeopleBuilderService,
        SpyPipe,
    ],
    exports: [SpyPipe],
    bootstrap: [AppComponent],
})
export class AppModule {
}
