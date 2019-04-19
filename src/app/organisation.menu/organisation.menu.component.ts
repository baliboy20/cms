import {Component, OnInit, ViewChild} from '@angular/core';

interface IMatDrawer {
    close(): Promise<any>;

    open(): Promise<any>;

    toggle(): Promise<any>;
}

@Component({
    selector: 'app-organisation.menu',
    templateUrl: './organisation.menu.component.html',
    styleUrls: ['./organisation.menu.component.scss']
})
export class OrganisationMenuComponent implements OnInit {

    // @ViewChild('drawer') set drawer(a: any) {
    //     console.log('drawer', a);
    //     (a as IMatDrawer).open();
    // }

    rightPanel: any;
    @ViewChild('leftPanel') set leftp(arg: { open: () => any }) {
        // arg.open();
        this.leftPanel = arg;
    }

    leftPanel: any;
    @ViewChild('rightPanel') set rightp(arg: { open: () => any }) {
        // arg.open();
        this.rightPanel = arg;
    }

    constructor() {
    }

    ngOnInit() {
    }


    toggle(arg) {
        console.log('clicked')
        if (arg === 'left') {
            this.leftPanel.toggle();
        } else {
            this.rightPanel.toggle();
        }
    }

}
