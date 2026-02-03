import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Concoction extends Item {
    name = "Concoction";

    constructor(system: System) {
        super(system);

        this.level = 1;
        this.initFamily(["Potion"]);

        this.addStat("Infusion de soin", 0);
        this.addStat("Infusion de mana", 0);
        this.addStat("Infusion de force", 0);
        this.addStat("Infusion d'endurance", 0);
        this.addStat("Infusion de résistance", 0);
        this.addStat("Infusion interdite", 0);
        this.addStat("Infusion explosive", 0);
        this.addStat("Infusion parfumée", 0);

        this.trait("Rare").base = true;

        this.text = Text;
    };

    canUse = () => {
        if (this.stat("Infusion de mana").value() > 0 || this.stat("Infusion interdite").value() > 0) {
            return true;
        }
        if (this.stat("Infusion explosive").value() > 0) {
            if (this.owner.zone("Terrain").cards.length > 0 || this.owner.adversary().zone("Terrain").cards.length > 0) {
                return true;
            }
        }
        for (const entity of [this.system.game.player, this.system.game.bot]) {
            for (const card of entity.zone("Terrain").cards) {
                if (card instanceof Creature) {
                    return true;
                }
            }
        }
        return false;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            let check = false;

            if (this.stat("Infusion explosive").value() > 0) {
                if (this.owner?.zone("Terrain").cards.length > 0 || this.owner?.adversary().zone("Terrain").cards.length > 0) {
                    check = true;
                }
            }
            for (const entity of [this.system.game.player, this.system.game.bot]) {
                for (const card of entity.zone("Terrain").cards) {
                    if (card instanceof Creature) {
                        check = true;
                    }
                }
            }

            if (check) {
                this.system.game.use.set(this, Use);
            }
            else {
                this.useEffect(undefined);
            }
        }
        else {
            let target = undefined;

            for (const card of this.owner.zone("Terrain").cards) {
                if (target == undefined && card instanceof Creature) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
            else {
                this.useEffect(undefined);
            }
        }
    };

    hasInfusion = () => {
        for (const stat of this.stats) {
            if (stat.name.includes("Infusion") && stat.value() > 0) {
                return true;
            }
        }
        return false;
    };

    useEffect = (target: Unit | undefined) => {
        this.owner.ressource("Mana").produce(this.stat("Infusion de mana").value());

        if (this.stat("Infusion interdite").value() > 0) {
            let homonculus = this.owner.getCard("Homonculus");
            homonculus.stat("Constitution").init(this.stat("Infusion interdite").value());
            homonculus.stat("Force").init(this.stat("Infusion interdite").value());
            homonculus.add("Terrain");
        }

        if (target != undefined) {
            this.targeting(target);

            target.damageByEffect(this.stat("Infusion explosive").value() * 2);

            if (target instanceof Creature) {
                target.heal(this.stat("Infusion de soin").value() * 2);
                target.stat("Force").step += this.stat("Infusion de force").value() * 4;
                target.stat("Endurance").step += this.stat("Infusion d'endurance").value() * 2;
                target.stat("Résistance").step += this.stat("Infusion de résistance").value() * 2;
                target.stat("Protection").step += Math.floor(this.stat("Infusion parfumée").value() / 5);
            }
        }

        this.move("Défausse");
        this.pose();
    };

    infuse = (potion: Item) => {
        if (potion.name == "Concoction") {
            for (const stat of potion.stats) {
                if (stat.name.includes("Infusion")) {
                    this.stat(stat.name).increase(stat.value());
                }
            }
        }
        else {
            let infusion_name = potion.name.replace('Potion', 'Infusion');
            this.stat(infusion_name).increase(potion.stat("Infusion").value());
        }
    };
};