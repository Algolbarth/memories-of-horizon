import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class DagueDeCuivre extends Equipment {
    name = "Dague de cuivre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 3]]);

        this.initFamily(["Arme"]);

        this.equipStat("Force").init(5);

        this.text = Text;
    };

    canUse = () => {
        if (this.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        for (const card of this.owner.zone("Terrain").cards) {
            if (card instanceof Creature && card.canEquip()) {
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