import type { Game } from '../../Game/Game';
import type { System } from '../../System/Class';
import { Chapter } from '../Class';

export class Lv11_Princesse extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 500);

        let array = [];
        for (let i = 1; i <= 3; i++) {
            array.push("Princesse");
        }
        for (let i = 1; i <= 10; i++) {
            array.push("Soldat");
        }
        this.addStep(110, ["Ville"], 20, array, ["Les trois princesses d'un royaume voisin décident de se rebeller face à la reine mère.", "Cette dernière vous recrute pour les corriger et briser la rébellion."]);
    };
};