import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';
import { Druid } from '../../../Class/Druid';

class DruideDesBois extends Druid {
    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Végétal", 25]]);

        this.text = Text;
    };
};

export class DruideDesBoisElfe extends DruideDesBois {
    name = "Druide des bois (forme elfe)";
    alternative_form = "Druide des bois (forme renard)";

    constructor(system: System) {
        super(system);

        this.initFamily(["Elfe"]);

        this.stat("Constitution").init(20);
        this.stat("Force").init(20);
    };

    otherPoseEffect = (card: Card) => {
        if (card.owner == this.owner && card instanceof Action) {
            this.stat("Constitution").increase(6);
        }
    };
};

export class DruideDesBoisRenard extends DruideDesBois {
    name = "Druide des bois (forme renard)";
    alternative_form = "Druide des bois (forme elfe)";

    constructor(system: System) {
        super(system);

        this.initFamily(["Bête"]);

        this.trait("Rare").init(true);
        this.trait("Forme animale").init(true);

        this.stat("Constitution").init(25);
        this.stat("Force").init(25);
        this.stat("Intelligence").init(5);
    };
};