import type { System } from '../../../../system/class';
import type { Unit } from '../../../class';
import { Creature } from '../../../class/creature';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';
import Use from './use.svelte';

export class DagueDeCuivre extends Equipment {
    name = "Dague de cuivre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.initFamily(["Arme"]);

        this.equipStat("Force").init(5);

        this.text = Text;
    };

    canUse = () => {
        if (this.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        for (const card of this.owner().zone("Terrain").cards) {
            if (card instanceof Creature && card.canEquip()) {
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
                if (target == undefined && card instanceof Creature && card.canEquip()) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target, "equip");
                return 0;
            }

            if (this.adversary().zone("Terrain").cards.length > 0) {
                this.useEffect(this.adversary().zone("Terrain").cards[0], "damage");
            }
        }
    };

    useEffect = (target: Unit, choice: string) => {
        this.targeting(target);

        if (choice == "equip") {
            target.equip(this);
        }
        else if (choice == "damage") {
            target.damageByEffect(5);
            this.move("Défausse");
        }

        this.pose();
    };
};