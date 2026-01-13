import type { System } from '../../../../System/Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';

export class Trefle extends Item {
    name = "Trèfle";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Végétal", 10]]);
        this.families.base.push("Plante");

        this.text = Text;
    };

    useEffect = () => {
        this.owner.discover(4);
        this.move("Défausse");
        this.pose();
    };
}