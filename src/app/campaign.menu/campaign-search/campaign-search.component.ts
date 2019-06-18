import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {enCampaignItemLbls, ICampaign} from '../../model/campaign.interface';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {IOrganisation} from '../../model/organisation.interface';
import {OrgDaoService} from '../../dao/OrgDao.service';
import {CampaignDaoService} from '../../dao/campaignDao.service';
import {mergeMap, map} from 'rxjs/internal/operators';
import {from, Observable, of} from 'rxjs';

@Component({
    selector: 'app-campaign-search',
    templateUrl: './campaign-search.component.html',
    styleUrls: ['./campaign-search.component.css']
})
export class CampaignSearchComponent implements OnInit {

    fldnam = enCampaignItemLbls;
    dataSource: any = [];
    data = [];
    orgs = [];
    selectedRowIndex;
    displayedColumns: string[] = [
        'action',
        'finishOn',
        'orgId',
        // 'startOn',
        'personsId',
        'actionPriority',
    ];
    selection = new SelectionModel<IOrganisation>(true, []);
    @ViewChild('confirmDelete', {static: true}) confirmDeleteTmpl: TemplateRef<any>;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor(private dao: CampaignDaoService,
                private daoOrgs: OrgDaoService,
                private dialog: MatDialog) {

    }

    getCampaigns() {
        console.log('running getdata...');
        const map$$ = map((a: ICampaign[]) => {
            return a.map((b: ICampaign) => {
                return b.items.map(c => {
                    return {
                        ...c,
                        name: b.name,
                        description: b.description,
                    };
                });
            });
        });

        const unpack$$ = map((a: any[]) => {
            const top = [];
            a.forEach(b => {
                b.forEach(c => top.push(c));
            });
            return (top);
        });

        this.dao.getCampaigns()
            .pipe(map$$, unpack$$)
            .subscribe(b => {
                console.log('retrieved data', b);
                this.dataSource = new MatTableDataSource<any>(b);
                // this.data = res;
            });
        // .unsubscribe();
    }

    getOrgs() {
        this.daoOrgs.enterprises$
            .subscribe(res => {
                this.orgs.push(...res);
            });
    }

    ngOnInit(): void {

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    ngAfterViewInit(): void {
        this.getCampaigns();
        this.getOrgs();
    }

}
