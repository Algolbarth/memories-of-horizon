import { deleteDuplicate } from "../../Utils";
import type { Card } from "./Class";

export class Elements {
    base: string[] = [];
    add: string[] = [];
    card: Card;

    constructor(card: Card) {
        this.card = card;
    };

    total = () => {
        let array = [];
        for (const b of this.base) {
            array.push(b);
        }
        for (const a of this.add) {
            array.push(a);
        }

        if (this.card.type == "Créature") {
            for (const e of this.card.equipments) {
                for (const i of e.equipElements) {
                    array.push(i);
                }
            }
        }

        array = deleteDuplicate(array);

        return array;
    };
};