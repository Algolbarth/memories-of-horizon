import type { System } from '../../../../System/Class';
import { Spell } from '../../../Class/Spell';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class CreationRocheuse extends Spell {
    name = "Création rocheuse";

    constructor(system: System) {
        super(system);

        this.init([["Or", 35], ["Terre", 35]]);

        this.text = Text;
    };

    canUse = function () {
        if (!this.owner.zone("Terrain").isFull()) {
            return true;
        }
        return false;
    };

    select = function () {
        if (this.owner.ressource("Mana").total() >= 50) {
            this.useEffect();
        }
        else {
            if (this.owner == this.system.game.player) {
                this.system.game.use.set(this, Use);
            }
            else {
                this.useEffect("Créature");
            }
        }
    };

    useEffect = function (choice: string) {
        if (this.owner.ressource("Mana").total() >= 50) {
            this.owner.ressource("Mana").spend(50);
            this.owner.getCard("Élémentaire de roche").add("Terrain");
            this.owner.getCard("Mur de roche").add("Terrain");
        }
        else {
            if (choice == "Créature") {
                this.owner.getCard("Élémentaire de roche").add("Terrain");
            }
            else if (choice == "Bâtiment") {
                this.owner.getCard("Mur de roche").add("Terrain");
            }
        }

        this.move("Défausse");
        this.pose();
    };
}