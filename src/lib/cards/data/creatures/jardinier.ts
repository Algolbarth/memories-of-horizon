import type { System } from '$lib/system/class';
import { Creature } from '$lib/cards/class/creature';
import { Button, UserInterface } from '$lib/cards/user-interface/class';

export class Jardinier extends Creature {
    name = "Jardinier";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Nature", 15]]);

        this.initFamily(["Elfe"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(5);

        this.addChoice([
            `Génère {card:Graines} dans votre inventaire.`,
            `Génère {card:Cultiver} dans votre inventaire.`,
            `Génère {card:Engrais} dans votre inventaire.`]);
    };

    userInterface = () => {
        if (this.owner().zone("Inventaire").isNotFull()) {
            this.game().user_interface = new UserInterface(this)
                .addChoice([
                    new Button(["Génère Graines dans votre inventaire"],
                        () => {
                            this.useEffect("Graines");
                            this.closeInterface();
                        }),
                    new Button(["Génère Cultiver dans votre inventaire"],
                        () => {
                            this.useEffect("Cultiver");
                            this.closeInterface();
                        }),
                    new Button(["Génère Engrais dans votre inventaire"],
                        () => {
                            this.useEffect("Engrais");
                            this.closeInterface();
                        }),]);
        }
        else {
            this.useEffect();
        }
    };

    autoUse = () => {
        if (this.owner().zone("Inventaire").isNotFull()) {
            this.useEffect("Graines");
        }
        else {
            this.useEffect();
        }
    };

    useEffect = (choice: string | undefined = undefined) => {
        if (choice != undefined) {
            this.owner().getCard(choice).add("Inventaire");
        }

        this.move("Terrain");
        this.pose();
    };
};