import type { Game } from '../../Game/Game';
import type { System } from '../../System/Class';
import { Chapter } from '../Class';

export class Lv13_Generaux extends Chapter {
    level = 13;

    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 710);

        let array = [];
        array.push("Bombardement");
        for (let i = 1; i <= 5; i++) {
            array.push("Chevalier d'élite (monté)");
        }
        array.push("Général");
        this.addStep(130, ["Ville"], 10, array, ["Le royaume voisin est en pleine guerre civile entre deux généraux.", "Le premier général est en train d'assiéger la capitale avec ses chevaliers."]);

        array = [];
        array.push("Muraille");
        for (let i = 1; i <= 5; i++) {
            array.push("Chevalier royal");
        }
        array.push("Général");
        this.addStep(130, ["Ville"], 10, array, ["Le deuxième général est retranché dans la ville derrière les remparts."]);
    }
}