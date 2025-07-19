import { Objet } from '../Objet';
import Text from './Text.svelte';

export class CoffreEnBois extends Objet {
    name = "Coffre en bois";

    constructor(system) {
        super(system);

        this.init([["Or", 5]]);

        this.text = Text;
    };

    useEffect = function () {
        this.owner.draw(2);
        this.move("Défausse");
        this.pose();
    };
}