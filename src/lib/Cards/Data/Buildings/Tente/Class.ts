import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Tente extends Building {
    name = "Tente";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.stat("Constitution").init(10);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            if (this.emplacement() > 0) {
                let up_card = this.area().cards[this.emplacement() - 1];
                if (up_card instanceof Creature) {
                    up_card.heal(5);
                }
            }
            if (this.emplacement() < this.area().cards.length - 1) {
                let down_card = this.area().cards[this.emplacement() + 1];
                if (down_card instanceof Creature) {
                    down_card.heal(5);
                }
            }
        }
    };
};