import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class BottesDeSeptLieues extends Equipment {
    name = "Bottes de sept lieues";

    constructor(system: System) {
        super(system);

        this.init([["Or", 70]]);

        this.families.base.push("Armure");
        this.families.base.push("Géant");

        this.equipStat("Vitesse").init(7);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner.zone("Terrain").cards) {
            if (card instanceof Creature && card.families.total().includes("Géant") && card.canEquip()) {
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
                if (target == undefined && card instanceof Creature && card.families.total().includes("Géant") && card.canEquip()) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    turnEffect = () => {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            this.bearer.stat("Constitution").increase(7);
            this.bearer.stat("Force").increase(7);
        }
    };
};