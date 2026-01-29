import { ChapterDeck } from '../../Deck/Chapter';
import type { Game } from '../../Game/Game';
import type { System } from '../../System/Class';
import { Chapter } from '../Class';

export class Lv17_Geomarteau extends Chapter {
    level = 17;

    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 1220);
        this.addRessource("Terre", 300);

        let cards = [];
        for (let i = 1; i <= 4; i++) {
            cards.push("Chevalier géant", "Ambidextrie", "Gantelets de fer", "Géomarteau");
        }
        let deck = new ChapterDeck(system, "Chevaliers", ["Chevalier royal (monté)", "Reine"]);
        this.addStep(85, ["Montagne"], 20, deck, cards, ["Alors que vous progressez sur un col étroit, un grondement sourd se fait entendre, vibrant à travers la roche.", "Des ombres massives apparaissent à l'horizon, se dessinant contre le ciel nuageux : des géants.", "Équipés de marteaux gigantesques, forgés dans la pierre même des montagnes, ils sont les gardiens de ces terres oubliées.", "Les géants ne sont pas ennemis par nature, mais leur but est de protéger les secrets des montagnes et de tester votre valeur."]);
    };
};