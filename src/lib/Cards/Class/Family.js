import { deleteDuplicate } from "../../Utils";

export class Families {
    base = [];
    add = [];
    step = [];
    turn = [];

    constructor(card) {
        this.card = card;
    };

    total = function () {
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