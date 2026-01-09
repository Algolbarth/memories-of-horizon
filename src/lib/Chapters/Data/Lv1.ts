import type { Game } from '../../Game/Game';
import type { System } from '../../System/Class';
import { Chapter } from '../Class';

export class Lv1_Humains extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 10);

        this.addStep(10, ["Village"], 10, ["Humain"], ["Vous arrivez dans un petit village, mais les habitants vous font face."]);
        this.addStep(10, ["Village"], 10, ["Humain", "Humain"]);
    };
};

export class Lv1_Bandits extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 10);

        this.addStep(10, ["Plaine"], 10, ["Bandit"], ["Des bandits bloquent le chemin, désirants votre bourse."]);
        this.addStep(10, ["Plaine"], 10, []);
        this.addStep(10, ["Plaine"], 10, ["Bandit"]);
    };
};

export class Lv1_Loup extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 10);

        this.addStep(10, ["Forêt"], 10, ["Loup gris"], ["Quelques loups affamés vous approchent, les crocs menaçants."]);
        this.addStep(10, ["Forêt"], 10, ["Loup gris"]);
    };
};

export class Lv1_Chien extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 10);

        this.addStep(10, ["Village"], 10, ["Chien", "Chien"], ["Au abords d'un village vous apercevez des chiens.", "Fouillant dans des débris pour se nourrir, ils n'ont pas l'air d'être domestiqué. Ou du moins ils ne le sont plus.", "Alors que vous alliez les contourner, ils vous foncent dessus."]);
        this.addStep(10, ["Village"], 10, ["Chien", "Chien", "Chien"]);
    };
};

export class Lv1_Mendiant extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 10);

        this.addStep(10, ["Ville"], 10, ["Mendiant"], ["Deux hommes se battent devant un bar.", "En vous approchant, il s'agit d'un ivrogne et d'un soldat soul."]);
        this.addStep(10, ["Ville"], 10, ["Soldat"]);
    };
};