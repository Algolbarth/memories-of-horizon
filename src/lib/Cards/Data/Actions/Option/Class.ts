import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Option extends Action {
    name = "Option";

    constructor(system: System) {
        super(system);

        this.init([["Or", 7]]);

        this.text = Text;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect("draw");
        }
    };

    useEffect = (choice: string) => {
        if (choice == "draw") {
            this.owner.draw(3);
        }
        else if (choice == "discover") {
            this.owner.discover(1);
        }

        this.move("Défausse");
        this.pose();
    };
};