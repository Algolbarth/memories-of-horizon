import { Card } from './Class';

export class Location extends Card {
    type = "Lieu";

    canUse = function () {
        if (!this.owner.zone("Région").isFull()) {
            return true;
        }
        return false;
    };

    useEffect = function () {
        this.move("Région");
        this.pose();
    };

    condition = function (card: Card) {
        return true;
    };
};