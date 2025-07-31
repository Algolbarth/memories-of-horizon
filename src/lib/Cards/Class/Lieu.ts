import { Card } from './Class';

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

    condition = function (card:Card) {
        return true;
    };
}