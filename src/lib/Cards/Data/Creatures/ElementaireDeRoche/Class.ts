import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class ElementaireDeRoche extends Creature {
    name = "Élémentaire de roche";

    constructor(system: System) {
        super(system);

        this.init([["Terre", 50]]);
        this.familles.base.push("Élémentaire");

        this.stat("Santé").base = 40;
        this.stat("Santé").current = 40;
        this.stat("Force").base = 40;
        this.stat("Endurance").base = 10;

        this.text = Text;
    };

    canUse = function () {
        if (!this.owner.zone("Terrain").isFull() || this.owner.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            if (this.owner.adversary().zone("Terrain").cards.length > 0) {
                this.system.game.use.set(this, Use);
            }
            else if (!this.owner.zone("Terrain").isFull()) {
                this.useEffect("Créature");
            }
        }
        else {
            if (this.owner.adversary().zone("Terrain").cards.length > 5) {
                this.useEffect("Effet");
            }
            else if (!this.owner.zone("Terrain").isFull()) {
                this.useEffect("Créature");
            }
        }
    };

    useEffect = function (choice) {
        if (choice == "Créature") {
            this.move("Terrain");
        }
        else if (choice == "Effet") {
            let terrain = copy(this.owner.adversary().zone("Terrain").cards);
            for (const card of terrain) {
                card.damageByEffect(5);
            }
            this.destroy();
        }
        this.pose();
    };
}