import { Lieu } from '../Lieu.js';
import Text from './Text.svelte';

export class Plaine extends Lieu {
    name = "Plaine";

    constructor(system) {
        super(system);

        this.init([["Or", 30]]);

        this.text = Text;
    };
}