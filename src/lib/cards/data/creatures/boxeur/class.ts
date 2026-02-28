import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class Boxeur extends Creature {
    name = "Boxeur";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Feu", 15]]);

        this.initFamily(["Gobelin"]);

        this.stat("Constitution").init(20);
        this.stat("Force").init(5);

        this.text = Text;
    };

    roundEffect = () => {
        this.stat("Force").round += this.system.game.round * 10;
    };
};