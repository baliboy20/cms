import {
    Component, ContentChild, ElementRef, HostListener, Input, OnInit, Renderer2, TemplateRef, ViewChild,
    ViewContainerRef
} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-subform-table',
    templateUrl: './subform-table.component.html',
    styleUrls: ['./subform-table.component.css']
})
export class SubformTableComponent implements OnInit {

    private _formGrp: FormGroup;
    @Input() template: TemplateRef<any>;
    @Input() formArrayName: string;
    @Input() newItem: any;

    @HostListener('click', ['$event.target']) add(event) {
        console.log('clicked add btn', event);
    }

    get me(): SubformTableComponent {
        return this;
    }

    @Input() set formGroup(arg: FormGroup) {
        // console.log('form group', arg);
        this._formGrp = arg;
    }
    get formGroup() {
        return this._formGrp;
    }

    @ViewChild('addItemFunc') set addAnchor(e: any) {
        // console.log('element ref', e, this.rnd);
        // this.rnd.listen('click', e.nativeElement, this.addItem);
    }

    private getFormArray(): FormArray {
        return this._formGrp.get(this.formArrayName) as FormArray;
    }


    addItem(e: Event) {
        e.preventDefault();
        e.stopImmediatePropagation();
        // console.log('additrm fired ====>  for!!', this.formArrayName, this.getFormArray());
        const fg = this.builder.group(this.newItem);
        const fc: FormArray = this.getFormArray();
             fc.push(fg);
    }

    deleteItem(e, idx) {
        e.preventDefault();
        e.stopImmediatePropagation();
        // console.log('remove item:', idx);
        this.getFormArray().removeAt(idx);
    }


    constructor(private rnd: Renderer2,
                private builder: FormBuilder) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        // console.log('template', this.template);
        // this.rnd.listen(this.template, 'onclick', this.addItem);
    }

}
