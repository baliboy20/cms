import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument, DocumentChangeAction, DocumentReference} from '@angular/fire/firestore';
import {from, of, pipe, ReplaySubject} from 'rxjs/index';
import {DbCollections} from './collections.enum';
import {IEmail, IWebSite, Vo} from '../model/contact.classes';
import {map, mergeMap, reduce, take, tap, toArray} from 'rxjs/internal/operators';
import WriteBatch = firebase.firestore.WriteBatch;
import {HttpClient} from '@angular/common/http';
import {flatMap} from 'tslint/lib/utils';


@Injectable({
    providedIn: 'root'
})
export class OrgDaoService {

    data: ReplaySubject<any> = new ReplaySubject<any>();

    constructor(private db: AngularFirestore, private htp: HttpClient) {
        this.db.collection(DbCollections.ORGANISATIONS).snapshotChanges().subscribe(a => this.data.next(a));

        console.log('inside dao constructor');
        this.getTestData();

    }

    getOrgs() {
        return this.db.collection(DbCollections.ORGANISATIONS).snapshotChanges()
            .pipe(
                map((arg: DocumentChangeAction<any>[]) => {
                    const retval = arg.map(a => {
                        // console.log('get dta', a.payload.doc.id);
                        return {
                            ...a.payload.doc.data(),
                            id: a.payload.doc.id,
                            // id2: a.payload.doc.id,
                        };
                    });
                    console.log('mapped', retval);
                    return retval;


                }),
            );
    }


      insertOrg<T extends Vo>(vo: T) {
        return this.db.collection(DbCollections.ORGANISATIONS)
            .add(vo).then( retval => {
                vo.id = retval.id;
             });
    }


    updateOrg<T extends Vo>(vo: T) {
        delete vo.id;
        this.db.doc('DbCollections.ORGANISATIONS/' + vo.id).update(vo);
    }

    deleteOrg(id: string) {
        // this.firestore.doc('policies/' + policyId).delete()sdjf;lsajjslkjfksl;jfsadl;
        this.db.collection(DbCollections.ORGANISATIONS).doc(id).delete()
            .catch((err) => console.log('delte rejected', err))
            .then((a) => console.log('deledte msg', a));

    }

    async deleteFor(ids: any[]) {
        const batch: WriteBatch = this.db.firestore.batch();

        for (const a of ids) {
            const ref: DocumentReference = this.db.collection(DbCollections.ORGANISATIONS).ref.doc(a); // DocumentReference
            batch.delete(ref);
        }

        const retval = await batch.commit();
        return retval;
    }

    /*
     name: string;
    address: string;
    emails: IEmail[];
    web: IWebSite[];
    telNos: ITelNo[];
    orgType: string;
    sector: string; //
    id: string;
     */
    getTestData() {
        const _coMap = (a)  => a.data;
        const mergeArr =  (a, b) =>  from(a);
        const toDTO = (a) => new Object({
            name: a[0],
            address: a[1],
            telNos: [{telNo: a[2], note: ''}],
            emails: [{email: a[3], note: ''}],
            web: [{url: 'www.meme.co', note: ''}],
            orgType: 'law',
            sector: 'finance',
            id: ''
        });

        this.htp.get('./assets/companies.json')
            .pipe(map(_coMap), mergeMap(mergeArr), take(200), map(toDTO))
            .subscribe(a => {
            // this.insertOrg(a as Vo);
        });

    }

}