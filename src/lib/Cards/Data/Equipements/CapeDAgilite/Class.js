import { Equipment } from '../Equipement';
import Text from './Text.svelte';

export class CapeDAgilite extends Equipment {
    name = "Cape d'agilité";

    constructor(system) {
        super(system);

        this.init([["Or", 20]]);
        this.familles.base.push("Armure");

        this.text = Text;
    };

    turnEffect = function () {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            this.bearer.stat("Esquive").turn += 1;
        }
    };
}