import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IOrganisation} from '../../model/organisaion.class';
import {IEmail} from '../../model/contact.classes';
import {OrgDaoService} from '../../dao/OrgDao.service';
import {DbCollections} from '../../dao/collections.enum';
import {AngularFirestore} from '@angular/fire/firestore';



@Component({
    selector: 'app-edit-organisation',
    templateUrl: './edit-organisation.component.html',
    styleUrls: ['./edit-organisation.component.scss'],

})
export class EditOrganisationComponent implements OnInit {

    formGrp: FormGroup;
    editState: 'edit' | 'add' = 'add';
    @Input() data: any;

    constructor(private builder: FormBuilder, private dao: OrgDaoService) {
        const emails: IEmail[] = [];
        const org: any = {
            address: ['178 defoe'],
            emails: [['sim@sim.org.co']],
            name: ['SimonCo', Validators.required],
            orgType: ['commercial'],
            sector: ['law'],
            telNos: [['0203 123']],
            web: [['www.si.co.uk']],
        };
        this.formGrp = builder.group(org);
    }

    ngOnInit() {
    }

    onCancel() {
 this.reset();
    }

    onSave(value) {
        console.log('dap', this.dao);
        this.dao.insertOrg(this.formGrp.getRawValue());
    }

    reset() {
        this.formGrp.reset();
    }
}
