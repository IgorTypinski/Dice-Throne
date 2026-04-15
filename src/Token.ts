export class Token {
    name: string;
    limit: number;

    constructor(name: string, limit: number){
        this.name = name;
        this.limit = limit;
    }
}