import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-whois-button',
    templateUrl: './whois-button.component.html',
    styleUrls: ['./whois-button.component.css']
})
export class WhoisButtonComponent implements OnInit {
    @Input() tip: string; //
 sugar: {name: string} = {name: 'will'};
    constructor() {
    }

    ngOnInit() {
    }

}
