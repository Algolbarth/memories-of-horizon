import { Card } from './Class';

export class Location extends Card {
    type = "Lieu";

    canUse = function () {
        if (!this.owner.zone("Lieux").isFull()) {
            return true;
        }
        return false;
    };

    useEffect = function () {
        this.move("Lieux");
        this.pose();
    };

    condition = function (card: Card) {
        return true;
    };
};