import type { System } from '../../../../System/Class';
import { copy } from '../../../../Utils';
import { Sort } from '../../../Class/Sort';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class PluieDeCailloux extends Sort {
    name = "Pluie de cailloux";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Terre", 20]]);

        this.text = Text;
    };

    select = function () {
        if (this.owner.ressource("Mana").total() >= 30) {
            this.useEffect();
        }
        else {
            if (this.owner == this.system.game.player) {
                this.system.game.use.set(this, Use);
            }
            else {
                this.useEffect("damage");
            }
        }
    };

    useEffect = function (choice: string) {
        if (this.owner.ressource("Mana").total() >= this.manaCost(30)) {
            this.owner.ressource("Mana").spend(this.manaCost(30));
            let nb_creature = this.owner.zone("Terrain").size - this.owner.zone("Terrain").cards.length;
            for (let i = 0; i < nb_creature; i++) {
                this.owner.getCard("Élémentaire de caillou").add("Terrain");
            }
            let terrain = copy(this.owner.adversary().zone("Terrain").cards);
            for (const card of terrain) {
                card.damageByEffect(6);
            }
        }
        else {
            if (choice == "creature") {
                let nb_creature = this.owner.zone("Terrain").size - this.owner.zone("Terrain").cards.length;
                for (let i = 0; i < nb_creature; i++) {
                    this.owner.getCard("Élémentaire de caillou").add("Terrain");
                }
            }
            else if (choice == "damage") {
                let terrain = copy(this.owner.adversary().zone("Terrain").cards);
                for (const card of terrain) {
                    card.damageByEffect(6);
                }
            }
        }

        this.move("Défausse");
        this.pose();
    };
}