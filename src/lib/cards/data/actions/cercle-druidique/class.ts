import type { System } from '../../../../system/class';
import { copy } from '../../../../utils';
import { Action } from '../../../class/action';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';
import Use from './use.svelte';

export class CercleDruidique extends Action {
    name = "Cercle druidique";

    constructor(system: System) {
        super(system);

        this.init([["Or", 80]]);

        this.initFamily(["Druide"]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner().zone("Terrain").cards) {
            if (card instanceof Creature && card.isFamily("Druide")) {
                return true;
            }
        }
        return false;
    };

    select = () => {
        if (this.owner().is_player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.owner().zone("Terrain").cards) {
                if (target == undefined && card instanceof Creature && card.isFamily("Druide")) {
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

        let battlefield = copy(this.owner().zone("Terrain").cards);
        let nb_druid = 0;
        let nb_same_element = 0;

        for (const card of battlefield) {
            let check = true;
            for (const e of target.elements.total()) {
                if (!card.isElement(e)) {
                    check = false;
                }
            }

            if (card.isFamily("Druide")) {
                nb_druid++;
            }
            if (check) {
                nb_same_element++;
            }
        }

        for (const e of target.elements.total()) {
            if (e != "Neutre") {
                this.owner().ressource(e).produce(5 * nb_same_element);
            }
            else {
                this.owner().ressource("Or").produce(5 * nb_same_element);
            }
        }
        this.owner().ressource("Or").produce(5 * nb_druid);

        this.move("Défausse");
        this.pose();
    };
};