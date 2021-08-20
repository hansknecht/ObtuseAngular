import { Venue } from './venue';

export interface Team {
    "id": number,
    "name": string,
    "link": string,
    "venue": Venue,
    "abbreviation": string,
    "teamName": string,
    "locationName": string,
    "firstYearOfPlay": string,
    "shortName": string,

}
