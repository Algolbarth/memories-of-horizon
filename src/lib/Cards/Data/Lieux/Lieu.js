import { Card } from '../../Card';

export class Lieu extends Card {
    type = "Lieu";

    use = function () {
        if (!this.owner.zone("Lieux").isFull()) {
            this.select();
        }
    };

    useEffect = function () {
        this.move("Lieux");
        this.pose();
    };

    condition = function (card) {
        return true;
    };
}