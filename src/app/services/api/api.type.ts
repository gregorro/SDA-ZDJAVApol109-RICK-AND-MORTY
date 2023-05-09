// const value =  5+8;

// const value2: number = '5'

export type Gender = 'Male' | 'Female'

// export enum Gender2 {
//     Male = 'Male',
//     Female = 'Female'
// }

export interface CharactersResponse {
    info: CharactersInfoResponse;
    results: CharacterDetails[]
}

export interface CharactersInfoResponse {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface CharacterDetails {
   id: number;
   name: string;
   status: string;
   species: string;
   type: string;
   gender: Gender;
   origin: Origin;
   location: Location;
   image: string;
   episode: string[]
   url: string;
   created: string;
}

export interface Origin {
    name: string;
    url: string;
}

export interface Location {
    name: string;
    url: string;
}