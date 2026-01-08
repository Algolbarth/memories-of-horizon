import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class Porte extends Building {
    name = "Porte";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);
        this.stat("Constitution").init(8);

        this.text = Text;
    };

    dieEffect = () => {
        if (this.zone.name != "Pile") {
            let cards = this.owner.draw(1);
            for (const c of cards) {
                c.lock();
            }
        }
    };
};