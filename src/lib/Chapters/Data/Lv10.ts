import type { Game } from '../../Game/Game';
import type { System } from '../../System/Class';
import { Chapter } from '../Class';

export class Lv10_Geants extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 400);

        this.addStep(100, ["Ville"], 10, ["Géant", "Plastron en platine", "Géant", "Épée de platine"], ["Deux géants se battent en duel pour départager le plus fort d'entre eux.", "Croyants que vous vouliez interrompre le duel, ils se liguent tous deux contre vous."]);
    };
};

export class Lv10_Gyoun extends Chapter {
    boss = true;
    level = 10;

    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 200);
        this.addRessource("Végétal", 200);

        this.addStep(100, ["Forêt"], 10, ["Gyoun, colosse de jade"], ["Autrefois le lieutenant d'un chef de guerre légendaire, le puissant Gyoun est parti en retraite dans la région.", "Celui qui a falli faire tomber des royaumes veux connaitre votre valeur", "Le colosse de jade s'élève une dernière fois, soyez brave."]);
    };
};