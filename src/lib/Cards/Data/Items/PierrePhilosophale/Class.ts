import type { System } from '../../../../System/Class';
import { Objet } from '../../../Class/Item';
import Text from './Text.svelte';

export class PierrePhilosophale extends Objet {
    name = "Pierre philosophale";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.text = Text;
    };

    canUse = function () {
        if (this.owner.ressource("Flux").stock > 0) {
            return true;
        }
        return false;
    };

    useEffect = function () {
        this.owner.ressource("Or").max += this.owner.ressource("Flux").stock;
        this.owner.ressource("Or").current += this.owner.ressource("Flux").stock;
        this.owner.ressource("Flux").stock = 0;
        this.move("Défausse");
        this.pose();
    };
}