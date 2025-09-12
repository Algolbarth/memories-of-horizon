import { deleteDuplicate } from "../../Utils";
import type { Card } from "./Class";

export class Families {
    base: string[] = [];
    add: string[] = [];
    step: string[] = [];
    turn: string[] = [];
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
        for (const s of this.step) {
            array.push(s);
        }
        for (const t of this.turn) {
            array.push(t);
        }

        if (this.card.type == "Créature") {
            for (const e of this.card.equipments) {
                for (const i of e.equipFamilies) {
                    array.push(i);
                }
            }
        }

        array = deleteDuplicate(array);

        return array;
    };
}