import type { System } from '../../../../system/class';
import { Druid } from '../../../class/druid';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';
import Use from './use.svelte';

export class BatonDeDruide extends Equipment {
    name = "Bâton de druide";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40]]);

        this.initFamily(["Druide"]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner().zone("Terrain").cards) {
            if (card instanceof Druid && card.canEquip()) {
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
                if (target == undefined && card instanceof Druid && card.canEquip()) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    startBattleEffect = () => {
        if (this.bearer != undefined && this.bearer instanceof Druid) {
            this.bearer.transform(this.bearer.alternative_form);
        }
    };

    endAdversaryPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer instanceof Druid) {
            this.bearer.transform(this.bearer.alternative_form);
        }
    };
};