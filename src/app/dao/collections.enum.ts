export enum DbCollections {
    ORGANISATIONS = 'Organisations',
    PERSONS = 'Persons',
}

export enum EditStates {
    'add',
    'edit'
}

export interface ILookup {
    type: string;
}
export const ORG_TYPEs: ILookup[] = [
 { type: 'Charity'},
 { type: 'Client'},
 { type: 'Art Agency'},
 { type: 'Small Medium Company'},
 { type: 'Large, International Company'},
 { type: 'Partnership firm'},
]


export const ORG_SECTORS: ILookup[] = [
    {type: 'Finance'},
    {type: 'Law'},
    {type: 'Media'},
    {type: 'IT'},
    {type: 'Hospitality'},
    {type: 'Events & Exibitions'},
    {type: 'NGO'},
    {type: 'Govt. Agency'},
]
