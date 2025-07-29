import { Objet } from '../Objet';
import Text from './Text.svelte';

export class PierrePhilosophale extends Objet {
    name = "Pierre Philosophale";

    constructor(system) {
        super(system);

        this.init([["Or", 5]]);

        this.text = Text;
    };

    select = function () {
        if (this.owner.ressource("Flux").stock > 0) {
            this.useEffect();
        }
    };

    useEffect = function () {
        this.owner.ressource("Or").max += this.owner.ressource("Flux").stock;
        this.owner.ressource("Or").current += this.owner.ressource("Flux").stock;
        this.owner.ressource("Flux").stock = 0;
        this.move("Défausse");
        this.pose();
    };
}