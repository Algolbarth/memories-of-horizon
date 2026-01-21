import type { Card } from "./Class";

export class Trait {
    name: string;
    base: boolean;
    add: boolean = false;
    step: boolean = false;
    turn: boolean = false;
    card: Card;

    constructor(name: string, value: boolean, card: Card) {
        this.name = name;
        this.base = value;
        this.card = card;
    };

    value = () => {
        let total = this.base || this.add || this.step || this.turn;

        if (this.card.type == "Créature") {
            for (const equipment of this.card.equipments) {
                total = total || equipment.equipTrait(this.name).value();
            }
        }

        return total;
    };

    display = () => {
        return this.condition();
    };

    condition = () => {
        return this.value();
    };
};
