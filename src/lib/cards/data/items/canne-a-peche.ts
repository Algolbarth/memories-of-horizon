import type { System } from '$lib/system/class';
import type { Card } from '$lib/cards/class/card';
import { UserInterface } from '$lib/cards/user-interface/class';
import { Item } from '$lib/cards/class/item';

export class CanneAPeche extends Item {
    name = "Canne à pêche";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Eau", 8]]);

        this.addText(`Quand posé : Augmente de 10 la perception d'une carte de famille Poisson sur votre pile.`);
    };

    canUse = () => {
        for (const card of this.owner().zone("Pile").cards) {
            if (card.isFamily("Poisson")) {
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
                    return target.isFamily("Poisson");
                },
                (target: Card) => {
                    this.useEffect(target);
                    this.closeInterface();
                });
    };

    autoUse = () => {
        let target = undefined;

        for (const card of this.owner().zone("Pile").cards) {
            if (target == undefined && card.isFamily("Poisson")) {
                target = card;
            }
        }

        if (target != undefined) {
            this.useEffect(target);
        }
    };

    useEffect = (target: Card) => {
        this.targeting(target);

        target.stat("Perception").increase(10);

        this.move("Défausse");
        this.pose();
    };
};