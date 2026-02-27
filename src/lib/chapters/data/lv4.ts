import { ChapterDeck } from '../../deck/chapter';
import type { Game } from '../../game/game';
import type { System } from '../../system/class';
import { Chapter } from '../class';

export class Lv4_ChevalierNoir extends Chapter {
    level = 4;

    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 75);

        let deck = new ChapterDeck(system, "Chevaliers", ["Chevalier noir"]);
        this.addStep(20, ["Forêt"], 10, deck, ["Chevalier noir"], ["Le royaume local est terrorisé par un mystérieux chevalier qui menace d'attaquer le château si on ne lui livre pas la princesse.", "Vous décidez d'aller au point de rendez-vous à la place de cette dernière."]);
    };
};

export class Lv4_Kanki extends Chapter {
    boss = true;
    level = 4;

    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 75);

        let deck = new ChapterDeck(system, "Roi des bandits", ["Bandit"]);
        this.addStep(20, ["Plaine"], 10, deck, ["Kanki, roi des bandits"], ["Les bandits sont connus pour s'organiser en groupes afin de mener des attaques d'envergure.", "Toutefois la taille de ces bandes ne peut pas excéder une centaine d'hommes, sous peine de se déchirer sur la répartition du butin.", "Un seul bandit fut capable de rallier tous les autres dans un intérêt commun, celui de survivre face aux nations.", "Le plus rusé et cruel d'entre eux, évitant le courroux de l'Empire malgré ses provocations et respecté par des généraux : Kanki, le roi des bandits."]);
    };
};