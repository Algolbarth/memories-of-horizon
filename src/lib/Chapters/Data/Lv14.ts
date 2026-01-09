import type { Game } from '../../Game/Game';
import type { System } from '../../System/Class';
import { Chapter } from '../Class';

export class Lv14_MageFeu extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 525);
        this.addRessource("Feu", 325);

        let array = [];
        for (let i = 1; i <= 10; i++) {
            array.push("Mage de feu");
        }
        for (let i = 1; i <= 10; i++) {
            array.push("Cercles magiques");
        }
        for (let i = 1; i <= 10; i++) {
            array.push("Boule de feu");
        }
        array.push("Pluie de feu");
        this.addStep(140, ["Volcan"], 40, array, ["Une rumeur concernant des membres rebels d'une école de la magie de feu se répend dans la région.", "En vous rendant dans l'établissement, le directeur vous explique la situation et vous conseille de fouiller les ruines de l'ancienne école.", "Vous y trouvez une ancienne salle abandonnée, la chaleur suffocante émanant des murs rongés par des flammes mystiques.", "Au centre, les mages vêtus de robes écarlates commencent à incanter."]);
    };
};

export class Lv14_Godrick extends Chapter {
    boss = true;
    level = 14;

    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 850);

        this.addStep(140, ["Ville"], 10, ["Godrick, roi des rois"], ["Avant la création de l'Empire, durant la grande guerre, les royaumes étaient encore rivaux.", "Un humain parvient cependant à créer la plus grande alliance de tout le conflit, un espoir de paix dans une période de pure violence.", "Celui qui l'on nomma le roi des rois fut sans aucun doute un précurseur, et ses efforts eurent un effet décisif pour le renouveau de l'Horizon."]);
    };
};