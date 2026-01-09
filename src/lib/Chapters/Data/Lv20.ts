import type { Game } from '../../Game/Game';
import type { System } from '../../System/Class';
import { Chapter } from '../Class';

export class Lv20_Archimere extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 1800);
        this.addRessource("Végétal", 1200);

        let array = [];
        for (let i = 1; i <= 10; i++) {
            array.push("Élémentaire des racines");
        }
        for (let i = 1; i <= 5; i++) {
            array.push("Archimère");
        }
        for (let i = 1; i <= 10; i++) {
            array.push("Druide des bois");
        }
        for (let i = 1; i <= 20; i++) {
            array.push("Biodiversité");
        }
        this.addStep(200, ["Forêt"], 50, array, ["La véritable force de l'élément végétal ne repose pas tant sur la longévité de ses créatures que sur la diversité de ces dernières.", "Les puissantes chimères sont des créatures s'abreuvant de cette génétique variée et deviennent les gardiennes naturelles des innombrables espèces de cet écosystème.", "Au coeur d'une forêt comme celle-là, l'affrontement sera inévitable."]);
    };
};

export class Lv20_Avatar extends Chapter {
    boss = true;
    level = 20;

    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 3000);

        this.addStep(200, ["Mer d'ether"], 10, ["L'Avatar, chapitre final"], ["L'Histoire prend fin ici même, dans les méandres de l'ether composant l'espace immense de l'Horizon."]);
    };
};