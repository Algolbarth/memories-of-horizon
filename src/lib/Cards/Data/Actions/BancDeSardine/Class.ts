import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class BancDeSardine extends Action {
    name = "Banc de sardine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Eau", 10]]);

        this.text = Text;
    };

    useEffect = () => {
        for (let i = 1; i <= 5; i++) {
            this.owner.getCard("Sardine").add("Inventaire");
        }

        this.move("Défausse");
        this.pose();
    };
};