import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class MasseMagique extends Equipment {
    name = "Masse magique";

    constructor(system: System) {
        super(system);

        this.init([["Or", 60]]);

        this.initFamily(["Arme"]);

        this.equipStat("Force").init(20);
        this.equipStat("Magie").init(10);

        this.text = Text;
    };

    fightEffect = () => {
        this.owner.ressource("Mana").stock(5);
    };
};