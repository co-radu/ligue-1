export class Team {

    id: number;
    name: string;
    shortName: string;
    tla: string; //Initials of team name.
    crestUrl: string; //Logo url.    

    constructor(
        id: number,
        name: string,
        shortName: string,
        tla: string,
        crestUrl: string
    ) {
        this.id = id
        this.name = name
        this.shortName = shortName
        this.tla = tla
        this.crestUrl = crestUrl
    }
}