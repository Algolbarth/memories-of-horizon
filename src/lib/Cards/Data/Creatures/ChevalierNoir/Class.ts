import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Text2 from './Text2.svelte';
import Use from './Use.svelte';

export class ChevalierNoir extends Creature {
    name = "Chevalier noir";
    otherForm = "Chevalier noir (monté)";
    mounted = false;
    rez = false;

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.initFamily(["Humain", "Chevalier"]);

        this.stat("Constitution").init(15);
        this.stat("Force").init(15);
        this.stat("Endurance").init(5);
        this.stat("Résistance").init(5);

        this.text = Text2;
    };

    dieEffect = () => {
        if (this.zone.name != "Pile" && this.owner.ressource("Or").total() >= 20) {
            this.owner.ressource("Or").spend(20);
            this.stat("Santé").init(1);
            this.rez = true;
        }
    };

    dieGo = () => {
        if (this.rez) {
            this.rez = false;
        }
        else {
            this.move("Défausse");
        }
    };
}

export class ChevalierNoirMonte extends Creature {
    name = "Chevalier noir (monté)";
    otherForm = "Chevalier noir";
    mounted = true;

    constructor(system: System) {
        super(system);

        this.init([["Or", 60]]);

        this.initFamily(["Humain", "Chevalier"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(20);
        this.stat("Vitesse").init(1);

        this.text = Text;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            if (this.adversary().zone("Terrain").cards.length > 0) {
                this.system.game.use.set(this, Use);
            }
            else {
                this.useEffect(undefined);
            }
        }
        else {
            if (this.adversary().zone("Terrain").cards.length > 0) {
                this.useEffect(this.adversary().zone("Terrain").cards[0]);
            }
            else {
                this.useEffect(undefined);
            }
        }
    };

    useEffect = (target: Unit) => {
        if (target != undefined) {
            let value = target.stat("Santé").value();
            if (this.owner.ressource("Or").total() < value) {
                value = this.owner.ressource("Or").total();
            }
            this.owner.ressource("Or").spend(value);
            target.damageByEffect(value);
        }
        this.move("Terrain");
        this.pose();
    };

    dieEffect = () => {
        if (this.zone.name != "Pile") {
            this.transform("Chevalier noir");
            this.zone.cards[this.slot].stat("Santé").init(this.zone.cards[this.slot].stat("Vitalité").value());
        }
    };

    dieGo = () => {

    };
}