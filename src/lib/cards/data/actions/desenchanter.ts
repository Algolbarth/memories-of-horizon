import type { System } from '$lib/system/class';
import { Action } from '$lib/cards/class/action';
import { UserInterface } from '$lib/cards/user-interface/class';
import type { Card } from '$lib/cards/class/card';

export class Desenchanter extends Action {
    name = "Désenchanter";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.addText(`Annule la transformation d'une carte alliée transformée.`);
    };

    canUse = () => {
        for (const zone of this.owner().zones) {
            for (const card of zone.cards) {
                if (card.original_form != undefined && card.original_form != card.alternative_form) {
                    return true;
                }
            }
        }
        return false;
    };

    userInterface = () => {
        this.game().user_interface = new UserInterface(this)
            .addTarget(
                [this.owner().zone("Pile"), this.owner().zone("Inventaire"), this.owner().zone("Terrain"), this.owner().zone("Défausse")],
                (target: Card) => {
                    return target.original_form != undefined && target.original_form != target.alternative_form;
                },
                (target: Card) => {
                    this.useEffect(target);
                    this.closeInterface();
                });
    };

    autoUse = () => {
        let target = undefined;

        for (const zone of this.owner().zones) {
            for (const card of zone.cards) {
                if (target == undefined && card.original_form != undefined && card.original_form != card.alternative_form) {
                    target = card;
                }
            }
        }

        if (target != undefined) {
            this.useEffect(target);
        }
    };

    useEffect = (target: Card) => {
        this.targeting(target);

        if (target.original_form != undefined) {
            target = target.transform(target.original_form);
        }

        this.move("Terrain");
        this.pose();
    };
};