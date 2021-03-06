import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument, DocumentChangeAction, DocumentReference} from '@angular/fire/firestore';
import {AsyncSubject, from, Observable, of, pipe, ReplaySubject} from 'rxjs/index';
import {DbCollections} from './collections.enum';
import {IEmail, IWebSite, Vo} from '../model/contact.classes';
import {filter, map, mergeMap, reduce, take, tap, toArray} from 'rxjs/internal/operators';
import {HttpClient} from '@angular/common/http';
import {flatMap} from 'tslint/lib/utils';
import {OrganisationFactory} from '../model/organisation.interface';
import {ICampaign, ICampaignItem} from '../model/campaign.interface';
import {isUndefined} from 'util';


@Injectable({
    providedIn: 'root'
})
export class CampaignDaoService {
    isUnTouchedDirtyCampaign = true;
    private _campaigns$: ReplaySubject<any> = new ReplaySubject<any>(1);
    counter = 0;

    get campaigns$(): ReplaySubject<any> {
        if (this.counter > 100) {
            return;
        }
        this.counter++;
        if (this.isUnTouchedDirtyCampaign) {
            this.isUnTouchedDirtyCampaign = false;
            this.getCampaigns();
        }
        return this._campaigns$;
    }

    constructor(private db: AngularFirestore, private htp: HttpClient) {

    }

    getCampaigns() {
        this.db.collection(DbCollections.CAMPAIGNS).snapshotChanges()
            .subscribe((arg: DocumentChangeAction<any>[]) => {
                const retval = arg.map(a => {
                    // console.log('get dta', a.payload.doc.id);
                    return {
                        ...a.payload.doc.data(),
                        id: a.payload.doc.id,
                        // id2: a.payload.doc.id,
                    };
                });
                this.campaigns$.next(retval);
                // console.log('retval', retval);
            });
        return this.campaigns$;
    }

    getCampaignsDropdown(): Observable<{ name: string, id: string, description: string }[]> {
        const mapper = (a) => Array.from(a).map((b: ICampaign) => ({name: b.name, id: b.id, description: b.description}));
        return this.campaigns$
            .pipe(map(mapper));
    }

    getCampaignItems(orgId: string): Observable<ICampaignItem[]> {
        const mapper = (a: ICampaign) => a.items;
        const filterById = (a: ICampaign) => a.id === orgId;
        return this.getCampaigns()
            .pipe(filter(filterById), map(mapper));
    }

    insertCam<T extends Vo>(vo: T) {
        delete vo.id;
        return this.db.collection(DbCollections.CAMPAIGNS)
            .add(vo).then(retval => {
                console.log('retval', retval);
                vo.id = retval.id;
                return vo;
            });
    }


    updateCam<T extends Vo>(vo: T) {
        // delete vo.id;
        console.log('db updateing..', vo.id);
        return this.db.collection(DbCollections.CAMPAIGNS).doc(vo.id).update(vo);
    }

    deleteOrg(id: string) {
        // this.firestore.doc('policies/' + policyId).delete()sdjf;lsajjslkjfksl;jfsadl;
        this.db.collection(DbCollections.CAMPAIGNS).doc(id).delete()
            .catch((err) => console.log('delte rejected', err))
            .then((a) => console.log('deledte msg', a));

    }

    async deleteFor(ids: any[]) {
        const batch = this.db.firestore.batch();

        for (const a of ids) {
            const ref: DocumentReference = this.db.collection(DbCollections.CAMPAIGNS).ref.doc(a); // DocumentReference
            batch.delete(ref);
        }

        const retval = await batch.commit();
        return retval;
    }

    async getDocRef(vo: ICampaign, orgId: string) {
        const ref: AngularFirestoreDocument = await this.db.doc(DbCollections.CAMPAIGNS + '/' + orgId);

        const a = await ref.update({address: '1234 highwayman road'});
        const b = ref.valueChanges().subscribe(console.log);
    }

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
                this.insertCam(a as Vo);
            });

    }

}
