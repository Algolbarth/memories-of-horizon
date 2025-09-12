import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class FauxDePaysan extends Equipment {
    name = "Faux de paysan";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);
        this.familles.base.push("Arme");

        this.text = Text;
    };

    killEffect = () => {
        this.owner.ressource("Or").stock += 5;
    };
}