import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ReplaySubject} from 'rxjs/index';
import {DbCollections} from './collections.enum';
import {Vo} from '../model/contact.classes';

@Injectable({
    providedIn: 'root'
})
export class OrgDaoService {

    data: ReplaySubject<any> = new ReplaySubject<any>();
    constructor(private firestore: AngularFirestore) {
        this.firestore.collection(DbCollections.ORGANISATIONS).snapshotChanges().subscribe(a => this.data.next(a));

        this.firestore.collection(DbCollections.ORGANISATIONS).snapshotChanges().subscribe(console.log);

    }

    getOrgs() {

        return this.firestore.collection(DbCollections.ORGANISATIONS).snapshotChanges();
    }


   public  insertOrg<T extends Vo>(vo: T) {
        const retval =  this.firestore.collection(DbCollections.ORGANISATIONS)
            .add(vo).then(a => {
                console.log('data added good', a);
            }).catch( err => {
                console.log('err occurred', err);
            });
        // console.log('retval insert', retval, DbCollections.ORGANISATIONS);
        // return retval;
    }


    updateOrg <T extends Vo>(vo: T) {
        delete vo.id;
        this.firestore.doc('DbCollections.ORGANISATIONS/' + vo.id).update(vo);
    }

    deleteOrg(id: string) {
        // this.firestore.doc('policies/' + policyId).delete()sdjf;lsajjslkjfksl;jfsadl;
        this.firestore.collection(DbCollections.ORGANISATIONS).doc(id).delete()
            .catch((err) => console.log('delte rejected', err))
            .then((a) => console.log('deledte msg', a));

    }

}