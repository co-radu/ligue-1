export class Season {

    id: number;
    startDate: Date;
    endDate: Date;
    currentMatchday: number;
    winner?: string;

    constructor(
        id: number,
        startDate: Date,
        endDate: Date,
        currentMatchday: number,
        winner: string
    ) {
        this.id = id
        this.startDate = startDate
        this.endDate = endDate
        this.currentMatchday = currentMatchday
        this.winner = winner
    }
}