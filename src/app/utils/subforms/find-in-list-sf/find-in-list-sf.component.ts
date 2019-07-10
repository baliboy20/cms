import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-find-in-list-sf',
    templateUrl: './find-in-list-sf.component.html',
    styleUrls: ['./find-in-list-sf.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class FindInListSfComponent implements OnInit {

    @Input() fldName = '';
    @Input() dataSource$: Observable<any>;
    @Input() devRef: string
    @Output() selected: EventEmitter<any> = new EventEmitter();
    public term;

    constructor() {
    }

    ngOnInit() {
        if (this.dataSource$) {
        }
    }

    add() {
    }

    remove(idx) {
    }

    applyFilter(vals) {
        console.log('vals', vals);
        this.term = vals;
    }

    onSelected(idx) {
        this.selected.emit(idx);
    }
}
