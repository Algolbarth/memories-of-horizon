import type { System } from '../../../System/Class';
import { Chapter } from '../../Chapter';

export class Lv3_Geant extends Chapter {
    constructor(system: System, number: number) {
        super(system, number);

        this.addRessource("Or", 50);

        this.addStep(30, "Plaine", ["Géant"], ["Un géant manque de vous marcher dessus.", "Il serait bon ton de lui apprendre à faire attention."]);
    }
}