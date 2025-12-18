import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class PanneauDeDirection extends Building {
    name = "Panneau de direction";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);
        this.stat("Constitution").init(5);

        this.text = Text;
    };

    refreshStackEffect = () => {
        this.owner?.draw(1);
    };
};