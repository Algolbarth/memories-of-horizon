import type { Game } from '../../Game/Game';
import type { System } from '../../System/Class';
import { Chapter } from '../Class';

export class Lv2_Mur extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 25);

        this.addStep(20, ["Plaine"], 10, ["Garde"], ["Un mur vous barre la route tandis que des gardes s'avancent vers vous."]);
        this.addStep(20, ["Plaine"], 10, ["Barricade", "Soldat"]);
    }
}

export class Lv2_Bandits extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 25);

        this.addStep(20, ["Forêt"], 10, ["Flèche en bois", "Flèche en bois", "Flèche en bois"], ["Tandis que vous voyagez sur une route, on se met à vous tirer dessus."]);
        this.addStep(20, ["Forêt"], 10, ["Bandit", "Bouclier en cuir", "Bandit", "Épée de cuivre"], ["Des bandits vous tendent une embuscade."]);
    }
}

export class Lv2_Ferme extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 25);

        this.addStep(20, ["Plaine"], 10, ["Vache", "Vache", "Chien"], ["Une colonne de vache vous bloque la route.", "Des fermiers semblent se disputer la propriété du bétail tout en vous empêchant de passer."]);
        this.addStep(20, ["Plaine"], 10, ["Vache", "Vache", "Vache"]);
        this.addStep(20, ["Plaine"], 10, ["Vache", "Fermier"]);
    }
}

export class Lv2_Raido extends Chapter {
    boss = true;
    level = 2;

    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 30);

        this.addStep(20, ["Plaine"], 10, ["Bandit", "Entraînement", "Bandit", "Entraînement"], ["Un groupe de bandit s'est installé dans une vallée.", "Il s'agirait de Raido à en croire des rescapés d'un village voisin.", "Lui et ses hommes sont connus pour rivaliser avec des soldats entrainés."]);
        this.addStep(20, ["Plaine"], 10, ["Bandit", "Bandit"]);
        this.addStep(20, ["Plaine"], 10, ["Raido, chef brutal", "Bandit", "Bandit"]);
    }
}