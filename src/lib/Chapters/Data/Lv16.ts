import type { Game } from '../../Game/Game';
import type { System } from '../../System/Class';
import { Chapter } from '../Class';

export class Lv16_Barbare extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 1190);
        this.addRessource("Feu", 60);

        let array = [];
        for (let i = 1; i <= 5; i++) {
            array.push("Chef barbare");
        }
        for (let i = 1; i <= 5; i++) {
            array.push("Doubles hachettes barbare");
        }
        for (let i = 1; i <= 5; i++) {
            array.push("Sang chaud");
        }
        for (let i = 1; i <= 3; i++) {
            array.push("Cor de guerre");
        }
        this.addStep(160, ["Plaine"], 20, array, ["Des tribus barbares s'entretuent dans les grandes plaines environnantes.", "Au coeur de la mêlée, les chefs galvanisés par leurs troupes se préparent à en finir.", "Le plus simple pour traverser cette hécatombe serait de les faire tomber ensemble."]);
    };
};

export class Lv16_Atlas extends Chapter {
    boss = true;
    level = 16;

    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 1250);

        this.addStep(160, ["Montagne"], 10, ["Atlas, marche-cratère"], ["Dans la plus grande grotte de la plus haute montagne de l'île, vit un géant hors du commun.", "Atlas est reputé pour sa taille qui impressionne même les dieux.", "Mais son manque d'éducation en fit un individu solitaire et abruti, écrasant des paysages par inattention."]);
    };
};