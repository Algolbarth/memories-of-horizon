import type { System } from '../../../../System/Class';
import { Spell } from '../../../Class/Spell';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class CreationRocheuse extends Spell {
    name = "Création rocheuse";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30], ["Terre", 30]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner().zone("Terrain").isNotFull()) {
            return true;
        }
        return false;
    };

    select = () => {
        if (this.owner().ressource("Mana").total() >= 50) {
            this.useEffect();
        }
        else {
            if (this.owner().is_player) {
                this.system.game.use.set(this, Use);
            }
            else {
                this.useEffect("creature");
            }
        }
    };

    useEffect = (choice: string | undefined = undefined) => {
        if (this.owner().ressource("Mana").total() >= 50) {
            this.owner().ressource("Mana").spend(50);

            this.owner().getCard("Élémentaire de roche").add("Terrain");
            this.owner().getCard("Mur de roche").add("Terrain");
        }
        else {
            if (choice == "creature") {
                this.owner().getCard("Élémentaire de roche").add("Terrain");
            }
            else if (choice == "building") {
                this.owner().getCard("Mur de roche").add("Terrain");
            }
        }

        this.move("Défausse");
        this.pose();
    };
};