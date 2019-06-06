import {EventEmitter, Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument, DocumentChangeAction, DocumentReference} from '@angular/fire/firestore';
import {AsyncSubject, from, Observable, of, pipe, ReplaySubject} from 'rxjs/index';
import {DbCollections} from './collections.enum';
import {IEmail, IWebSite, Vo} from '../model/contact.classes';
import {map, mergeMap, reduce, take, tap, toArray} from 'rxjs/internal/operators';
import {HttpClient} from '@angular/common/http';
import {flatMap} from 'tslint/lib/utils';
import {IOrganisation, OrganisationFactory} from '../model/organisation.interface';
import {isNull, isUndefined} from 'util';
import {IPerson} from '../model/person.class';


@Injectable({
    providedIn: 'root'
})
export class OrgDaoService {
    isUnTouchedDirtyOrganisation = true;
    isUnTouchedDirtyPeople = true;

    private _enterprises$: ReplaySubject<any>;
    private _people$: ReplaySubject<any>;
    counter = 0;
    get people$(): ReplaySubject<any> {
        console.log('counter', this.counter);
        if ( this.counter >  100) {
            return;
        }
        this.counter++;
        console.log('inside get peoples!! null ~ undefined', isNull(this._people$), isUndefined(this._people$));
        if ( isUndefined(this._people$) ) {
            console.log('inside get peoples undefined logic block');
            this._people$ = new ReplaySubject<any>(1);
            this._populateCache_People();
        }
        console.log('inside after init', this._people$)
        return this._people$;
    }

    set people$(value: ReplaySubject<any>) {
        this._people$ = value;
    }
    get enterprises$(): ReplaySubject<any> {
        if (this._enterprises$ === undefined) {
            this._enterprises$ = new ReplaySubject<any>(1);
            this._populateCache_Org();
            this.getOrgs().subscribe(console.log);
        }
        return this._enterprises$;
    }

    set enterprises$(value: ReplaySubject<any>) {
        this._enterprises$ = value;
    }

    constructor(private db: AngularFirestore, private htp: HttpClient) {
    }


    /*
       |==========================================================================================|
                                    People API's
       |==========================================================================================|
     */
    async insertPersonAsync<T extends Vo>(vo: T) {
        delete vo.id;
        return await this.db.collection(DbCollections.PERSONS).add(vo);
    }
    private _populateCache_People() {
        if (this.isUnTouchedDirtyOrganisation) {
            console.log('inside _populateCache_People');
            this.db.collection(DbCollections.PERSONS).snapshotChanges()
                .pipe(
                    map((arg: DocumentChangeAction<any>[]) => {
                        const retval = arg.map(a => {
                            return {
                                ...a.payload.doc.data(),
                                id: a.payload.doc.id,
                            };
                        });
                        return retval;
                    })
                )
                .subscribe(a => {
                    this.people$.next(a);
                    this.isUnTouchedDirtyPeople = false;
                });
        }
    }

    /*
        |==========================================================================================|
                                   Organisation API's
        |==========================================================================================|
      */
    private _populateCache_Org() {
        if (this.isUnTouchedDirtyOrganisation) {
            this.db.collection(DbCollections.ORGANISATIONS).snapshotChanges()
                .pipe(
                    map((arg: DocumentChangeAction<any>[]) => {
                        const retval = arg.map(a => {
                            return {
                                ...a.payload.doc.data(),
                                id: a.payload.doc.id,
                            };
                        });
                        return retval;
                    })
                )
                .subscribe(a => {
                    this.enterprises$.next(a);
                    this.isUnTouchedDirtyOrganisation = false;
                });
        }
    }

    getOrgs() {
        return this.db.collection(DbCollections.ORGANISATIONS).snapshotChanges()
            .pipe(
                map((arg: DocumentChangeAction<any>[]) => {
                    const retval = arg.map(a => {
                        return {
                            ...a.payload.doc.data(),
                            id: a.payload.doc.id,
                            // id2: a.payload.doc.id,
                        };
                    });
                    this.enterprises$.next(retval);
                    // console.log('getorgs retval', retval);
                    return retval;
                }),
            );
    }

    async insertOrgAsync<T extends Vo>(vo: T) {
        delete vo.id;
        return await this.db.collection(DbCollections.ORGANISATIONS)
            .add(vo).then(retval => {
                vo.id = retval.id;
            });
    }


    updateOrg<T extends Vo>(vo: T) {
        return this.db.collection(DbCollections.ORGANISATIONS).doc(vo.id).update(vo);
    }

    /**
     **/
    async insertOrganisationAndPersons<T extends Vo>(organisation: T, people: IPerson[]) {

        const retval = await this.db.collection(DbCollections.ORGANISATIONS).add(organisation);
        if (!isUndefined(retval.id)) {
            people.forEach(a => {
                a.entId = retval.id;

                this.insertPersonAsync(a);
            });
        } else {
            throw new Error('no valid id returned');
        }
        console.log('insertOrganisation', retval.id);

        return retval;
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

    async getDocRef(vo: IOrganisation, orgId: string) {
        const ref: AngularFirestoreDocument = await this.db.doc(DbCollections.ORGANISATIONS + '/' + orgId);

        const a = await ref.update({address: '1234 highwayman road'});
        const b = ref.valueChanges().subscribe(console.log);
        console.log('getted', b);

    }

    /*
        |==========================================================================================|
                                  Combined and Filter Organisation/ People API's
        |==========================================================================================|
      */

    /**
     * returns partial Company and People details
     */
    getOrgsJoinedWithPeople() {
        const o: Observable<any> = null;
        const __coreOrg = this.__coreOrg;
        this.enterprises$.pipe(map(__coreOrg));
        return o;
    }
    private __coreOrg(a: IOrganisation) {
        return {orgId: a.id, name: a.name};
    }

    /**
     *
     */
    getPeople() {
        return this.people$;
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
                this.insertOrgAsync(a as Vo);
            });

    }

}