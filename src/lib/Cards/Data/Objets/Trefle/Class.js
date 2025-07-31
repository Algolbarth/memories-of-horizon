import { Objet } from '../../../Class/Objet';
import Text from './Text.svelte';

export class Trefle extends Objet {
    name = "Trèfle";

    constructor(system) {
        super(system);

        this.init([["Or", 10], ["Végétal", 10]]);
        this.familles.base.push("Plante");

        this.text = Text;
    };

    useEffect = function () {
        this.owner.discover(4);
        this.move("Défausse");
        this.pose();
    };
}