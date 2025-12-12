import type { Game } from '../../Game/Game';
import type { System } from '../../System/Class';
import { Chapter } from '../Class';

export class Lv7_Roi extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 200);

        this.addStep(70, ["Ville"], 10, ["Soldat", "Soldat", "Soldat", "Soldat", "Roi"], ["Le trône du royaume local est occupé par un usurpateur.", "Les villages alentours vous somment de faire tomber ce faux-roi."]);
    }
}