import type { System } from '../../../../System/Class';
import { copy } from '../../../../Utils';
import { Action } from '../../../Class/Action';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class LigneEnergetique extends Action {
    name = "Ligne énergétique";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner.zone("Terrain").cards) {
            if (card instanceof Creature && card.isFamily("Élémentaire")) {
                return true;
            }
        }
        return false;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.owner.zone("Terrain").cards) {
                if (target == undefined && card instanceof Creature && card.isFamily("Élémentaire")) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = (target: Creature) => {
        this.targeting(target);

        let battlefield = copy(this.owner.zone("Terrain").cards);
        let nb_element = 0;

        for (const card of battlefield) {
            let check = true;
            for (const e of target.elements.total()) {
                if (!card.elements.total().includes(e)) {
                    check = false;
                }
            }

            if (card.isFamily("Élémentaire") && check) {
                nb_element++;
            }
        }

        for (const e of target.elements.total()) {
            if (e != "Neutre") {
                this.owner.ressource(e).current += 5 * nb_element;
            }
            else {
                this.owner.ressource("Or").current += 5 * nb_element;
            }
        }

        this.move("Défausse");
        this.pose();
    };
};