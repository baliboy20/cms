import {IEmail, ITelNo, IWebSite} from './contact.classes';

export class Person {

}


export interface IPerson {
    firstName: string;
    nickName: string;
    lastName: string;
    emails: IEmail[];
    websites: IWebSite[];
    telephoneNos: ITelNo[];
    id: string;
}


export class PersonFactory {
    static scratchInstance(){
        const per: IPerson = {
            firstName: '',
            nickName: '',
            lastName: '',
            emails: [],
            websites: [],
            telephoneNos: [],
            id: '',
        };
        return per;
    }
}