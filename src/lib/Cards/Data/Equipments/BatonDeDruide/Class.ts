import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class BatonDeDruide extends Equipment {
    name = "Bâton de druide";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40]]);

        this.initFamily(["Druide"]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner.zone("Terrain").cards) {
            if (card instanceof Creature && card.isFamily("Druide") && card.canEquip()) {
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
                if (target == undefined && card instanceof Creature && card.isFamily("Druide") && card.canEquip()) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    startBattleEffect = () => {
        if (this.bearer != undefined && this.bearer.isFamily("Druide")) {
            this.bearer.transform(this.bearer.otherForm);
            console.log("start battle");
        }
    };

    endAdversaryStepEffect = () => {
        if (this.bearer != undefined && this.bearer.isFamily("Druide")) {
            this.bearer.transform(this.bearer.otherForm);
            console.log("end step");
        }
    };
};