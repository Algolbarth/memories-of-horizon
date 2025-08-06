import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class GrandPretre extends Creature {
    name = "Grand prêtre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 110]]);
        this.familles.base.push("Humain");

        this.stat("Vie").base = 5;
        this.stat("Vie").current = 5;
        this.stat("Attaque").base = 5;

        this.text = Text;
    };

    select = function () {
        let check = false;

        for (const card of this.owner.zone("Terrain").cards) {
            if (check == false && card.type == "Créature") {
                check = true;
            }
        }

        if (check) {
            if (this.owner == this.system.game.player) {
                this.system.game.use.set(this, Use);
            }
            else {
                let choice = "life";
                for (const card of this.owner.zone("Terrain").cards) {
                    if (card.type == "Créature" && card.isDamaged()) {
                        choice = "heal";
                    }
                }

                this.useEffect(choice);
            }
        }
        else {
            this.useEffect(undefined);
        }
    };

    useEffect = function (choice: string | undefined) {
        let terrain = copy(this.owner.zone("Terrain").cards);
        for (const card of terrain) {
            if (card.type == "Créature") {
                if (choice == "life") {
                    card.stat("Vie").add += 10;
                    card.stat("Vie").current += 10;
                }
                else if (choice == "heal") {
                    card.heal(20);
                }
            }
        }
        this.move("Terrain");
        this.pose();
    };
}