import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument, DocumentChangeAction, DocumentReference} from '@angular/fire/firestore';
import {AsyncSubject, from, of, pipe, ReplaySubject} from 'rxjs/index';
import {DbCollections} from './collections.enum';
import {IEmail, IWebSite, Vo} from '../model/contact.classes';
import {map, mergeMap, reduce, take, tap, toArray} from 'rxjs/internal/operators';
import {HttpClient} from '@angular/common/http';
import {flatMap} from 'tslint/lib/utils';
import {OrganisationFactory} from '../model/organisation.interface';
import {IPerson} from '../model/person.class';


@Injectable({
    providedIn: 'root'
})
export class OrgDaoService {

    enterprises$: ReplaySubject<any> = new ReplaySubject<any>(1);

    constructor(private db: AngularFirestore, private htp: HttpClient) {
        this.db.collection(DbCollections.ORGANISATIONS).snapshotChanges().subscribe(a => this.enterprises$.next(a));

        // console.log('inside dao constructor', this.getTestData());
        // this.getTestData();
        this.getOrgs()
            .subscribe(a => this.enterprises$.next(a));

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
                    this.enterprises$.next(retval);
                    // this.enterprises$.complete();
                    return retval;


                }),
            );
    }


    insertOrg<T extends Vo>(vo: T) {
        delete vo.id;
        return this.db.collection(DbCollections.ORGANISATIONS)
            .add(vo).then(retval => {
                vo.id = retval.id;
            });
    }


    updateOrg<T extends Vo>(vo: T) {
        // delete vo.id;
        console.log('db updateing..', vo.id);
       return this.db.collection(DbCollections.ORGANISATIONS).doc(vo.id).update(vo);
    }

    deleteOrg(id: string) {
        // this.firestore.doc('policies/' + policyId).delete()sdjf;lsajjslkjfksl;jfsadl;
        this.db.collection(DbCollections.ORGANISATIONS).doc(id).delete()
            .catch((err) => console.log('delte rejected', err))
            .then((a) => console.log('deledte msg', a));

    }

    async deleteFor(ids: any[]) {
        const batch = this.db.firestore.batch();

        for (const a of ids) {
            const ref: DocumentReference = this.db.collection(DbCollections.ORGANISATIONS).ref.doc(a); // DocumentReference
            batch.delete(ref);
        }

        const retval = await batch.commit();
        return retval;
    }

   async  getDocRef(vo: IPerson, orgId: string) {
        const ref: AngularFirestoreDocument =  await this.db.doc(DbCollections.ORGANISATIONS + '/' + orgId)

       const a = await ref.update({address: '1234 highwayman road'});
        const b = ref.valueChanges().subscribe(console.log);
        console.log('getted', b);

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
        const tapit = (a) => console.log(a);
        const _coMap = (a) => a.data;
        const mergeArr = (a, b) => from(a);
        const toDTO = (a) => OrganisationFactory.initialize(
            a[0],
            a[1],
        );

        this.htp.get('./assets/companies.json')

            .pipe(map(_coMap), mergeMap(mergeArr), take(5), tap(tapit), map(toDTO))
            .subscribe(a => {
                // console.log('data gen', a);
                this.insertOrg(a as Vo);
            });

    }

}