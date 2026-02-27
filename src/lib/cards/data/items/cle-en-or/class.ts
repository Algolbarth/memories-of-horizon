import type { System } from '../../../../system/class';
import { Item } from '../../../class/item';
import Text from './text.svelte';

export class CleEnOr extends Item {
    name = "Clé en or";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.text = Text;
    };

    useEffect = () => {
        this.owner().zone("Pile").turn_level += 1;

        this.move("Défausse");
        this.pose();
    };
};