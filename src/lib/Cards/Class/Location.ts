import { Card } from './Class';

export class Location extends Card {
    type = "Lieu";

    canUse = () => {
        if (!this.owner.zone("Région").isFull()) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        this.move("Région");
        this.pose();
    };

    can_read = (card: Card) => {
        return true;
    };
};