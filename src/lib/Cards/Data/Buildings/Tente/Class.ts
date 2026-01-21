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

    startStepEffect = () => {
        if (this.zone && this.slot && this.zone.name == "Terrain") {
            if (this.slot > 0) {
                let up_card = this.zone.cards[this.slot - 1];
                if (up_card instanceof Creature) {
                    up_card.heal(5);
                }
            }
            if (this.slot < this.zone.cards.length - 1) {
                let down_card = this.zone.cards[this.slot + 1];
                if (down_card instanceof Creature) {
                    down_card.heal(5);
                }
            }
        }
    };
};