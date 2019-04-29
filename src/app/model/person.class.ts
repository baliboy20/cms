import {IEmail, ITelNo, IWebSite} from './contact.classes';

export class Person {

}


export interface IPerson {
    firstName: string;
    nickName: string;
    lastName: string;
    title: string;
    emails: IEmail[];
    web: IWebSite[];
    telNos: ITelNo[];
    entId: string;
    id: string;
}


export class PersonFactory {
    static scratchInstance() {
        const per: IPerson = {
            firstName: '',
            nickName: '',
            lastName: '',
            title: '',
            emails: [],
            web: [],
            telNos: [],
            id: 'xxx',
            entId: 'unalloc'
        };
        return per;
    }
}