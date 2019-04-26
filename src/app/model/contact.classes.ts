export interface Vo {
    id: string;
}

export interface IEmail extends Vo {
    address: string;
    note: string;

}

export interface ITelNo extends Vo {
    telNo: string;
    note: string;

}

export interface IWebSite extends Vo {
    address: string;
    note: string;
}

export interface IComment extends Vo {
    note: string;
    date: string;
}


export class ContactsFactory {
    static instOfTelnos(): ITelNo {
        return {telNo: '', note: '', id: ''};
    }

    static instOfEmail(): IEmail {
        return {address: '', note: '', id: ''};
    }

    static instOfWebsite(): IWebSite {
        return {address: '', id: '', note: ''};
    }

    static instOfComments(): IComment {
        return {date: '', id: 'xxx', note: ''};
    }
}