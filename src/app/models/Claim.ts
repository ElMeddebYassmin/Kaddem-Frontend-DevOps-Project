export class Claim {
    idDepartement: number;
    nomDepart : string;

}


export enum Status {
    PENDING = 'PENDING',
    INPROGRESS = 'INPROGRESS',
    RESOLVED = 'RESOLVED'
}
