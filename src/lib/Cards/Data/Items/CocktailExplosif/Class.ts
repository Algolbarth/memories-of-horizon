import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class CocktailExplosif extends Item {
    name = "Cocktail explosif";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Feu", 25]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect(this.adversary().zone("Terrain").cards[0]);
        }
    };

    useEffect = (target: Unit) => {
        this.targeting(target);

        target.stat("Brûlure").increase(10);
        if (target.slot != undefined && target.zone) {
            if (target.slot > 0) {
                target.zone.cards[target.slot - 1].stat("Brûlure").increase(10);
            }
            if (target.slot < target.zone.cards.length - 1) {
                target.zone.cards[target.slot + 1].stat("Brûlure").increase(10);
            }
        }

        this.move("Défausse");
        this.pose();
    };
};