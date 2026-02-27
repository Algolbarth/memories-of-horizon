import type { System } from '../../../../system/class';
import { Building } from '../../../class/building';
import Text from './text.svelte';

export class Porte extends Building {
    name = "Porte";

    constructor(system: System) {
        super(system);

        this.init([["Or", 6]]);

        this.stat("Constitution").init(10);

        this.text = Text;
    };

    perishEffect = () => {
        let cards = this.owner().draw(1);
        for (const c of cards) {
            c.lock();
        }
    };
};