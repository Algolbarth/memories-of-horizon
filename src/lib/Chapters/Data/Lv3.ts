import type { Game } from '../../Game/Game';
import type { System } from '../../System/Class';
import { Chapter } from '../Class';

export class Lv3_Geant extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 50);

        this.addStep(30, ["Plaine"], 10, ["Géant"], ["Un géant manque de vous marcher dessus.", "Il serait bon ton de lui apprendre à faire attention."]);
    }
}