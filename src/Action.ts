/**
 * Reprezentuje akcję bohatera 
 * 
 */

export class Action {
    name: string;
    diceCost: string[] | number[];
    costSymbols: boolean;
    costNumbers: boolean;
    type: string;
    useFn: () => void;

    constructor(name: string, diceCost: string[] | number[], costSymbols: boolean, costNumbers: boolean, type: string, useFn: () => void){
        this.name = name;
        this.diceCost = diceCost;
        this.costSymbols = costSymbols;
        this.costNumbers = costNumbers;
        this.type = type;
        this.useFn = useFn;
    }

}

function actionCiecie(): void{
    console.log("Cięcie akcja");
}
  
export const NinjaActions: Action[] = [
    new Action("Cięcie", ["katana", "katana", "katana"], true, false, "attack", actionCiecie),
    // new Action("Spacer po linie", ["shuriken", "shuriken", "shuriken", "shuriken"], true, false, "attack"), 
    // new Action("Spacer po linie", ["shuriken", "shuriken", "shuriken", "shuriken"], true, false, "attack")
]