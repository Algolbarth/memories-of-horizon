import { copy } from '../../../../utils';
import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';
import Use from './use.svelte';

export class GrandPretre extends Creature {
    name = "Grand prêtre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 125]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    select = () => {
        let check = false;

        for (const card of this.owner().zone("Terrain").cards) {
            if (check == false && card instanceof Creature) {
                check = true;
            }
        }

        if (check) {
            if (this.owner().is_player) {
                this.system.game.use.set(this, Use);
            }
            else {
                let choice = "life";
                for (const card of this.owner().zone("Terrain").cards) {
                    if (card instanceof Creature && card.isDamaged()) {
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

    useEffect = (choice: string | undefined) => {
        let battlefield = copy(this.owner().zone("Terrain").cards);
        for (const card of battlefield) {
            if (card instanceof Creature) {
                if (choice == "life") {
                    card.stat("Constitution").increase(15);
                }
                else if (choice == "heal") {
                    card.heal(20);
                }
            }
        }

        this.move("Terrain");
        this.pose();
    };
};