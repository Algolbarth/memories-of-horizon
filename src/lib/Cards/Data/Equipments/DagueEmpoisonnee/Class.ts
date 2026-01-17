import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class DagueEmpoisonnee extends Equipment {
    name = "Dague empoisonnée";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.families.base.push("Arme");

        this.equipStat("Force").init(5);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner?.adversary().zone("Terrain").cards) {
            if (card.type == "Créature") {
                return true;
            }
        }
        for (const card of this.owner.zone("Terrain").cards) {
            if (card.type == "Créature" && card.canEquip()) {
                return true;
            }
        }
        return false;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.owner.zone("Terrain").cards) {
                if (target == undefined && card.type == "Créature" && card.canEquip()) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target, "equip");
                return 0;
            }

            for (const card of this.owner?.adversary().zone("Terrain").cards) {
                if (card.type == "Créature") {

                }
            }
        }
    };

    useEffect = (target: Unit, choice: string) => {
        if (choice == "equip") {
            target.equip(this);
        }
        else if (choice == "damage") {
            target.stat("Poison").increase(5);
            target.stat("Toxicité").increase(10);
            this.move("Défausse");
        }
        this.pose();
    };

    fightEffect = (defender: Unit) => {
        if (defender.type == "Créature") {
            defender.stat("Toxicité").increase(3);
        }
    };
};