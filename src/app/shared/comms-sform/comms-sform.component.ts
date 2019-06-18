import {Component, HostListener, Input, OnInit, Renderer2, TemplateRef, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {SubformTableComponent} from '../../utils/subform-table/subform-table.component';

@Component({
    selector: 'app-comms-sform',
    templateUrl: './comms-sform.component.html',
    styleUrls: ['./comms-sform.component.css']
})
export class CommSFormComponent implements OnInit {
    private _formGrp: FormGroup;
    @Input() template: TemplateRef<any>;
    @Input() formArrayName: string;
    @Input() newItem: any;

    @HostListener('click', ['$event.target']) add(event) {
        console.log('clicked add btn', event);
    }

    get me(): SubformTableComponent {
        return (this as  any);
    }

    @Input() set formGroup(arg: FormGroup) {
        // console.log('form group', arg);
        this._formGrp = arg;
    }

    get formGroup(): FormGroup {
        return this._formGrp;
    }

    @ViewChild('addItemFunc', {static: true}) set addAnchor(e: any) {
        // console.log('element ref', e, this.rnd);
        // this.rnd.listen('click', e.nativeElement, this.addItem);
    }

    private getFormArray(): FormArray {
        return this._formGrp.get(this.formArrayName) as FormArray;
    }


    addItem(e: Event) {
        e.preventDefault();
        e.stopImmediatePropagation();
        console.log('additrm fired ====>  for!!', this.formArrayName, this.getFormArray());
        const fg = this.builder.group(this.newItem);
        const fc: FormArray = this.getFormArray();
        fc.push(fg);
    }

    deleteItem(e, idx) {
        e.preventDefault();
        e.stopImmediatePropagation();
        console.log('remove item:', idx);
        this.getFormArray().removeAt(idx);
    }


    constructor(private rnd: Renderer2,
                private builder: FormBuilder) {
    }

    ngOnInit() {
        // console.log('formarrayname', this.formArrayName, this.formGroup.get('comments').controls);
    }

    ngAfterViewInit() {
        // console.log('template', this.template);
        // this.rnd.listen(this.template, 'onclick', this.addItem);
    }
}
