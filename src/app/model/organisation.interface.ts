import {ContactsFactory, IEmail, ITelNo, IWebSite} from './contact.classes';

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


export class OrganisationFactory {

    static newTelNo: ITelNo = ContactsFactory.instOfTelnos();
    static newEmailAdd: IEmail = ContactsFactory.instOfEmail();
    static newWebItem: IWebSite = ContactsFactory.instOfWebsite();

    static instOfOrganisation(): IOrganisation {

        const io: IOrganisation = {
            name: '',
            address: '',
            emails: [OrganisationFactory.newEmailAdd],
            web: [OrganisationFactory.newWebItem],
            telNos: [OrganisationFactory.newTelNo],
            orgType: 'someOrgType',
            sector: 'Law',
            id: 'unalloc',
        };
        return io;
    }

    static initialize(name?: string,
                      address?: string,
                      email?: IEmail,
                      web?: IWebSite,
                      telnos?: ITelNo,
                      orgType?: string,
                      sector?: string): IOrganisation {
        const io = OrganisationFactory.instOfOrganisation();
        io.name = name;
        io.address = address;
        return io;
    }
}