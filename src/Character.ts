import type { Action } from "./Action";
import type { Token } from "./Token";

class Character {
    name: string;
    health: number;
    actions: Action[];
    currentTokens: Token[];
    onPileTokens: Token[];


    constructor(name: string, health: number, actions: Action[], currentTokens: Token[]) {
        this.name = name;
        this.health = health;
        this.actions = actions;
        this.currentTokens = currentTokens;
        this.onPileTokens = [];
    }

    getCharacterActions(): Action[] {
        return this.actions;
    }

    useCharacterAction(actionName: string): void {
        console.log(`Using action: ${actionName}`);
    }
}