import {Component, Input, OnInit} from '@angular/core';
import {from, Observable, of} from 'rxjs';

@Component({
  selector: 'app-dbl-find-in-list-sf',
  templateUrl: './dbl-find-in-list-sf.component.html',
  styleUrls: ['./dbl-find-in-list-sf.component.scss']
})
export class DblFindInListSfComponent implements OnInit {
  @Input() fldName4Search = 'name';
  @Input() dataSource4Search$: Observable<any>;
  @Input() fldNameOf = 'name';
  @Input() dataSourceOf$: Observable<any>;
  constructor() { }

  ngOnInit() {
    this.dataSource4Search$ = of([
      {name: 'will1'},
      {name: 'suz1'},
      {name: 'alice1'},
      {name: 'colin1'},
      {name: 'petra1'},
    ]);

    this.dataSourceOf$ = of([
      {name: 'will2'},
      {name: 'suz2'},
      {name: 'alice2'},
      {name: 'colin2'},
      {name: 'petra2 DUKE'},
    ]);
  }

}
