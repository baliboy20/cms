import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CampaignMenuComponent} from './campaign.menu/campaign.menu.component';
import {OrganisationMenuComponent} from './organisation.menu/organisation.menu.component';
import {MainComponent} from './main/main.component';


const routes: Routes = [
    // {path: 'campaign-menu', component: CampaignMenuComponent},
    // {path: 'organisations-menu', component: OrganisationMenuComponent},
    // {path: 'console', component: ConsolePortalComponent},
    // {path: 'customers', component: CustomerPortalComponent},
    {path: 'main', component: MainComponent},
    // {path: '', redirectTo: 'MainComponent', pathMatch: 'full'},
    {path: '', component: MainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
