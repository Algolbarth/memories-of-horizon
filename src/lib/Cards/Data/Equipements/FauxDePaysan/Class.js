import { Equipment } from '../../../Class/Equipement';
import Text from './Text.svelte';

export class FauxDePaysan extends Equipment {
    name = "Faux de paysan";

    constructor(system) {
        super(system);

        this.init([["Or", 20]]);
        this.familles.base.push("Arme");

        this.text = Text;
    };

    killEffect = function () {
        this.owner.ressource("Or").stock += 5;
    };
}