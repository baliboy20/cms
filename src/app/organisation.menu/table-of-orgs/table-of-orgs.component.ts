import {Component, OnInit} from '@angular/core';
import {OrgDaoService} from '../../dao/OrgDao.service';

@Component({
    selector: 'app-table-of-orgs',
    templateUrl: './table-of-orgs.component.html',
    styleUrls: ['./table-of-orgs.component.scss']
})
export class TableOfOrgsComponent implements OnInit {


    dataSource: any = [
        {name: 'dd', address: 'dfsdf'},
        {name: 'dd', address: 'dfsdf'},
    ];
    displayedColumns: string[] = [
        'name',
        'address',
        'orgType',
        'sector',
        'edits',
    ];

    constructor(private dao: OrgDaoService) {
        console.log('in const')
        this.dao.getOrgs()
            .subscribe(b => this.dataSource = b );
    }

    ngOnInit() {

    }

}
