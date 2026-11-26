import type { System } from '$lib/system/class';
import type { Card } from '$lib/cards/class/card';
import { Action } from '$lib/cards/class/action';
import { UserInterface } from '$lib/cards/user-interface/class';

export class Cultiver extends Action {
    name = "Cultiver";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Nature", 8]]);

        this.initFamily(["Plante"]);

        this.addText(`Quand posé : Réduit de 20 le coût d'une carte de famille Plante sur votre pile.`);
    };

    canUse = () => {
        for (const card of this.owner().zone("Pile").cards) {
            if (card.isFamily("Plante") && card.costTotal() > 0) {
                return true;
            }
        }
        return false;
    };

    userInterface = () => {
        this.game().user_interface = new UserInterface(this)
            .addTarget(
                [this.owner().zone("Pile")],
                (target: Card) => {
                    return target.costTotal() > 0 && target.isFamily("Plante");
                },
                (target: Card) => {
                    this.useEffect(target);
                    this.closeInterface();
                });
    };

    autoUse = () => {
        let target = undefined;

        for (const card of this.owner().zone("Pile").cards) {
            if (target == undefined && card.isFamily("Plante") && card.costTotal() > 0) {
                target = card;
            }
        }

        if (target != undefined) {
            this.useEffect(target);
        }
    };

    useEffect = (target: Card) => {
        this.targeting(target);

        target.reduceCost(20);
        target.lock();

        this.move("Défausse");
        this.pose();
    };
};