import { ChapterDeck } from '../../deck/chapter';
import { Deck } from '../../deck/class';
import type { Game } from '../../game/game';
import type { System } from '../../system/class';
import { Chapter } from '../class';

export class Lv2_Mur extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 25);

        let deck = new ChapterDeck(system, "Gardes", ["Garde"]);
        this.addStep(10, ["Plaine"], 10, deck, ["Garde"], ["Un mur vous barre la route tandis que des gardes s'avancent vers vous."]);
        this.addStep(10, ["Plaine"], 10, deck, ["Barricade", "Soldat"]);
    };
};

export class Lv2_Bandits extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 25);

        let deck = new ChapterDeck(system, "Bandits", ["Bandit"]);
        this.addStep(10, ["Forêt"], 10, deck, ["Flèche en bois", "Flèche en bois", "Flèche en bois"], ["Tandis que vous voyagez sur une route, on se met à vous tirer dessus."]);
        this.addStep(10, ["Forêt"], 10, deck, ["Bandit", "Bouclier en cuir", "Bandit", "Épée de cuivre"], ["Des bandits vous tendent une embuscade."]);
    };
};

export class Lv2_Ferme extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 25);

        let deck = new ChapterDeck(system, "Ferme", ["Vache", "Chien", "Fermier", "Faux de paysan"]);
        this.addStep(10, ["Plaine"], 10, deck, ["Vache", "Vache", "Chien"], ["Une colonne de vache vous bloque la route.", "Des fermiers semblent se disputer la propriété du bétail tout en vous empêchant de passer."]);
    };
};

export class Lv2_Raido extends Chapter {
    boss = true;
    level = 2;

    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 30);

        let deck = new ChapterDeck(system, "Chef brutal", ["Bandit", "Entraînement"]);
        this.addStep(10, ["Plaine"], 10, deck, ["Bandit", "Entraînement", "Bandit", "Entraînement"], ["Un groupe de bandit s'est installé dans une vallée.", "Il s'agirait de Raido à en croire des rescapés d'un village voisin.", "Lui et ses hommes sont connus pour rivaliser avec des soldats entrainés."]);
        this.addStep(10, ["Plaine"], 10, deck, ["Raido, chef brutal", "Bandit", "Bandit"]);
    };
};