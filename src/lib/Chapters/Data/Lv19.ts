import type { Game } from '../../Game/Game';
import type { System } from '../../System/Class';
import { Chapter } from '../Class';

export class Lv19_ChevalierGeant extends Chapter {
    level = 19;

    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 2540);

        let array = [];
        for (let i = 1; i <= 7; i++) {
            array.push("Chevalier géant (monté)");
        }
        for (let i = 1; i <= 4; i++) {
            array.push("Roi");
        }
        this.addStep(190, ["Ville"], 10, array, ["À peine arrivé à la capitale locale, vous êtes invité par les gardes à rencontrer les rois. Dans la grande salle du trône, vous vous tenez face à un groupe imposant de chevaliers. Les trônes sont occupés par ceux qui vont tendent ce piège, sûrs de leur capacité à vous soumettre."]);
    }
}