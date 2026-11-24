import type { System } from '$lib/system/class';
import { Item } from '$lib/cards/class/item';
import type { Card } from '$lib/cards/class/card';
import { UserInterface } from '$lib/cards/user-interface/class';
import { Creature } from '$lib/cards/class/creature';

export class Engrais extends Item {
    name = "Engrais";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Nature", 8]]);

        this.initFamily(["Plante"]);

        this.addText(`Quand posé : Augmente de 30 la constitution d'une créature de famille Plante sur votre terrain.`);
    };

    canUse = () => {
        for (const card of this.owner().zone("Terrain").cards) {
            if (card instanceof Creature && card.isFamily("Plante")) {
                return true;
            }
        }
        return false;
    };

    userInterface = () => {
        this.game().user_interface = new UserInterface(this)
            .addTarget(
                [this.owner().zone("Terrain")],
                (target: Card) => {
                    return target instanceof Creature && target.isFamily("Plante");
                },
                (target: Creature) => {
                    this.useEffect(target);
                    this.closeInterface();
                });
    };

    autoUse = () => {
        let target = undefined;

        for (const card of this.owner().zone("Terrain").cards) {
            if (target == undefined && card instanceof Creature && card.isFamily("Plante")) {
                target = card;
            }
        }

        if (target != undefined) {
            this.useEffect(target);
        }
    };

    useEffect = (target: Creature) => {
        this.targeting(target);

        target.stat("Constitution").increase(30);

        this.move("Défausse");
        this.pose();
    };
};