import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import {of, pipe, ReplaySubject} from 'rxjs/index';
import {DbCollections} from './collections.enum';
import {Vo} from '../model/contact.classes';
import { map, mergeMap, reduce, tap, toArray} from 'rxjs/internal/operators';



@Injectable({
    providedIn: 'root'
})
export class OrgDaoService {

    data: ReplaySubject<any> = new ReplaySubject<any>();
    constructor(private firestore: AngularFirestore) {
        this.firestore.collection(DbCollections.ORGANISATIONS).snapshotChanges().subscribe(a => this.data.next(a));

        this.firestore.collection(DbCollections.ORGANISATIONS).snapshotChanges().subscribe(a => console.log('helluva', a));

    }

    getOrgs() {
        return  this.firestore.collection(DbCollections.ORGANISATIONS).snapshotChanges()
            .pipe(

                map((arg: DocumentChangeAction<any>[]) => {
                 const retval =  arg.map( a => {
                        return {
                            id: a.payload.doc.id,
                            ...a.payload.doc.data(),
                        };
                    });
                // console.log('mapped', retval);
                return retval;



                } ),
                 // reduce((a, b) => {
                 //     a.push(b);
                 //     console.log('reduce',  a);
                 //     return a;
                 // }, [ ]),
                 // tap(x => console.log('x', x))
            );
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