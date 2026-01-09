import type { Game } from '../../Game/Game';
import type { System } from '../../System/Class';
import { Chapter } from '../Class';

export class Lv8_Bouffon extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 250);

        this.addStep(80, ["Ville"], 10, ["Chevalier royal", "Bouffon", "Cheval de guerre"], ["Un sinistre bouffon prépare un plan pour semer le chaos dans le royaume qu'il servait jusqu'à alors.", "Avec l'aide d'un chevalier corrompu il compte renverser son roi à moins que l'on se mette en travers de sa route."]);
    };
};

export class Lv8_DucYousei extends Chapter {
    boss = true;
    level = 8;

    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 125);
        this.addRessource("Feu", 125);

        this.addStep(80, ["Volcan"], 10, ["Duc Yousei"], ["Yousei est un gobelin sauvage, un chef de guerre dont la seule passion est la fureur de la guerre.", "Né sur un champ de bataille, il a gravé son nom dans les annales de l'Empire par un instinct infaillible et son furieux désir de se battre.", "Nommé général et duc après une série de victoires écrasantes, il ne cherche ni gloire ni pouvoir, seulement l'adrénaline du champ de bataille.", "Sa réputation est loin de celle d'un guerrier qui frappe sans réfléchir, mais celle d'un guerrier suivant ses propres règles."]);
    };
};