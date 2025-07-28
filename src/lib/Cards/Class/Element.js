import { deleteDuplicate } from "../../Utils";

export class Elements {
    base = [];
    add = [];

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