import {Component, OnInit} from '@angular/core';
import {OrgDaoService} from '../../dao/OrgDao.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormControl} from '@angular/forms';
import {filter, map, mergeMap, tap} from 'rxjs/internal/operators';

@Component({
    selector: 'app-people-search',
    templateUrl: './people-search.component.html',
    styleUrls: ['./people-search.component.css']
})
export class PeopleSearchComponent implements OnInit {

    formGroup;
    searchTerm: string;
    people$: Observable<any>;

    constructor(builder: FormBuilder,
                private dao: OrgDaoService) {
        this.formGroup = builder.group({searchTerm: ''});
    }

    ngOnInit() {
        // this.dao.getPeople().subscribe(console.log);
        //   console.log('"DAO"', this.dao.people$, this.dao);
        this.people$ = this.dao.people$;
        const fs = this.filterStream;
        const srchCtl: FormControl = this.formGroup.get('searchTerm');
        srchCtl.valueChanges
            .pipe(map(a => a.toUpperCase()))

            .subscribe(srh => {
                this.people$ = this.dao.people$.pipe(map(b => b.filter(val => fs(val, srh))),
                    tap(console.log)
                );

            });
    }

    filterStream = (value, tm) =>
            value.firstName.toUpperCase().includes(tm) ||
            value.lastName.toUpperCase().includes(tm)  ||
            value.org.name.toUpperCase().includes(tm)
}
