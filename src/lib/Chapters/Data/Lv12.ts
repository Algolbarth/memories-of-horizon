import type { Game } from '../../Game/Game';
import type { System } from '../../System/Class';
import { Chapter } from '../Class';

export class Lv12_Reine extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 600);

        let array = ["Chevalier royal (monté)"];
        for (let i = 1; i <= 3; i++) {
            array.push("Reine");
        }
        this.addStep(120, ["Ville"], 10, array, ["Le plus grand chevalier du continent est désigné par les trois royaumes alentours.", "Au coeur d'une controverse, vous devez déterminer si ce chevalier a pris parti pour l'une des reines."]);
    };
};

export class Lv12_Yotanwa extends Chapter {
    boss = true;
    level = 12;

    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 600);

        this.addStep(120, ["Plaine"], 10, ["Yotanwa, patronne de la guerre"], ["Avant de rejoindre l'Empire, Yotanwa était une figure légendaire sur sa planète, unifiant les tribus éparses par sa force, sa vision et son charisme.", "Elle mena ses guerriers dans une série de batailles sanglantes pour éradiquer les conflits internes, persuadant chaque tribu de se rallier sous sa bannière pour assurer leur survie face aux menaces extérieures.", "Son règne unifié fut marqué par une expansion fulgurante, mais aussi par la dureté de son leadership, forgeant une armée invincible et imprévisible.", "Plutôt que de s'effondrer dans l'anarchie comme les anciens chefs barbares, elle prit la décision de s'allier à l'Empire, assurant ainsi un avenir à son peuple tout en maintenant sa position de reine."]);
    };
};