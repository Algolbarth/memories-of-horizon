import type { System } from '../../../../System/Class';
import { copy } from '../../../../Utils';
import type { Creature } from '../../../Class/Creature';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class EventailDeCouteaux extends Equipment {
    name = "Éventail de couteaux";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.families.base.push("Arme");

        this.equipStat("Force").init(30);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        for (const card of this.owner.zone("Terrain").cards) {
            if (card.type == "Créature" && card.canEquip()) {
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
                if (target == undefined && card.type == "Créature" && card.canEquip()) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect("equip", target);
                return 0;
            }

            if (this.owner.adversary().zone("Terrain").cards.length > 0) {
                this.useEffect("damage", undefined);
            }
        }
    };

    useEffect = (choice: string, target: Creature | undefined) => {
        if (choice == "equip") {
            target.equip(this);
        }
        else if (choice == "damage") {
            let adversary_land = copy(this.owner.adversary().zone("Terrain").cards);
            for (const card of adversary_land) {
                card.damageByEffect(3);
            }
            this.move("Défausse");
        }
        this.pose();
    };
};