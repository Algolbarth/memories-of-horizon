import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class HacheDeJet extends Equipment {
    name = "Hache de jet";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.families.base.push("Arme");

        this.equipStat("Adresse").init(25);

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
                this.useEffect(target, "equip");
                return 0;
            }

            if (this.owner.adversary().zone("Terrain").cards.length > 0) {
                this.useEffect(this.owner.adversary().zone("Terrain").cards[0], "damage");
            }
        }
    };

    useEffect = (target: Unit, choice: string) => {
        if (choice == "equip") {
            target.equip(this);
        }
        else if (choice == "damage") {
            target.damageByEffect(50);
            this.move("Défausse");
        }

        this.pose();
    };
};