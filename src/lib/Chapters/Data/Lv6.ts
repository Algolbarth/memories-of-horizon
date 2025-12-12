import type { Game } from '../../Game/Game';
import type { System } from '../../System/Class';
import { Chapter } from '../Class';

export class Lv6_ChevalierGeant extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 150);

        this.addStep(60, ["Plaine"], 10, ["Chevalier géant"], ["Un chevalier sur de lui souhaite vous défier pour prouver sa force.", "Le problème étant que ce chevalier semble pouvoir enjamber des montagnes."]);
    }
}

export class Lv6_GoHoumei extends Chapter {
    boss = true;
    level = 6;

    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 75);
        this.addRessource("Terre", 75);

        this.addStep(60, ["Montagne"], 10, ["Go Houmei, reine des tours"], ["Dans les montagnes du pays de Wei, Go Houmei est la plus grande cheffe de guerre.", "Craint pour ses stratégies audacieuses et sa maîtrise des engins de siège, elle est une légende vivante.", "Il se dit qu'elle n'a jamais connu la défaite lorsqu'il s'agit de défendre une ville contre les envahisseurs."]);
    }
}