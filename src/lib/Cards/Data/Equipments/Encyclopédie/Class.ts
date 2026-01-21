import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Action } from '../../../Class/Action';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class Encyclopedie extends Equipment {
    name = "Encyclopédie";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.equipStat("Intelligence").init(2);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            let read_condition = (card: Card) => {
                if (card instanceof Action) {
                    return true;
                }
                return false;
            };
            this.owner.draw(1, read_condition);
        }
    };
};