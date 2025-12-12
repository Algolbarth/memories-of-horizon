import type { Game } from '../../Game/Game';
import type { System } from '../../System/Class';
import { Chapter } from '../Class';

export class Lv18_Prince extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 2000);

        let array = ["Princesse"];
        for (let i = 1; i <= 60; i++) {
            array.push("Chevalier");
        }
        array.push("Prince");
        this.addStep(180, ["Ville"], 70, array, ["Après la mort du couple royal suite à la dernière guerre, la région est dirigée d'une main de fer par leurs héritiers.", "Le prince est désigné futur roi et sa soeur aînée devient sa plus proche conseillère.", "Cette alliance dégénère en une prise de pouvoir par la force, l'armée est déployée dans les villes."]);
    }
}

export class Lv18_Ballas extends Chapter {
    boss = true;
    level = 18;

    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 1000);
        this.addRessource("Eau", 1000);

        this.addStep(180, ["Mer"], 10, ["Ballas, suprémaciste"], ["Né d'une bonne famille aristocratique et rongé par l'ambition, le ministre ondin Ballas exerce un pouvoir considérable.", "Manipulateur rusé, il incite la haine envers les étrangers, les désignant comme des menaces à l'autorité de son peuple.", "Sous son masque de leader, il nourrit ses désirs personnelles en manipulant les masses pour qu'elles lui obéissent sans remettre en question ses décisions.", "Son règne est celui de la peur, de la division et de la répression.", "Son rêve le plus fou serait de devenir le prochain Empereur.", "Les autres ministres ne sont pas dupes et engagent une guerre terrible pour mettre un terme à cette histoire qui n'a que trop duré."]);
    }
}