import type { System } from '../../../../System/Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';

export class PierrePhilosophale extends Item {
    name = "Pierre philosophale";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner.ressource("Flux").total() > 0) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        if (this.owner.ressource("Flux").total() >= 5) {
            this.owner.ressource("Or").increase(5);
            this.owner.ressource("Flux").spend(5);
        }
        else {
            this.owner.ressource("Or").increase(this.owner.ressource("Flux").total());
            this.owner.ressource("Flux").spend(this.owner.ressource("Flux").total());
        }

        this.move("Défausse");
        this.pose();
    };
};