import {IEmail, ITelNo, IWebSite} from './contact.classes';

export interface IOrganisation {

    name: string;
    address: string;
    emails: IEmail[];
    web: IWebSite[];
    telNos: ITelNo[];
    orgType: string;
    sector: string; //
    id: string;
}