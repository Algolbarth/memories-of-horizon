import type { Game } from '../../Game/Game';
import type { System } from '../../System/Class';
import { Chapter } from '../Class';

export class Lv4_ChevalierNoir extends Chapter {
    level = 4;

    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 75);

        this.addStep(40, ["Forêt"], 10, ["Chevalier noir"], ["Le royaume local est terrorisé par un mystérieux chevalier qui menace d'attaquer le château si on ne lui livre pas la princesse.", "Vous décidez d'aller au point de rendez-vous à la place de cette dernière."]);
    }
}

export class Lv4_Kanki extends Chapter {
    boss = true;
    level = 4;

    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 75);

        this.addStep(40, ["Plaine"], 10, ["Kanki, roi des bandits"], ["Les bandits sont connus pour s'organiser en groupes afin de mener des attaques d'envergure.", "Toutefois la taille de ces bandes ne peut pas excéder une centaine d'hommes, sous peine de se déchirer sur la répartition du butin.", "Un seul bandit fut capable de rallier tous les autres dans un intérêt commun, celui de survivre face aux nations.", "Le plus rusé et cruel d'entre eux, évitant le courroux de l'Empire malgré ses provocations et respecté par des généraux : Kanki, le roi des bandits."]);
    }
}