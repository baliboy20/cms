export interface Vo {
    id: string;
}

export interface IEmail extends Vo {
    addresss: string;
    note: string;
    id: string;
}

export interface ITelNo  extends Vo {
    telNo: string;
    note: string;
    id: string;
}

export interface IWebSite extends Vo  {
    address: string;
    note: string;
    id: string;
}

export interface IComment extends Vo  {
    note: string;
    id: string;
    date: string;
}