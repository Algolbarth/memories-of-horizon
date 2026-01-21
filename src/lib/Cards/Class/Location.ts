import { Card } from './Class';

export class Location extends Card {
    type = "Lieu";

    canUse = () => {
        return !this.owner?.zone("Région").isFull();
    };

    useEffect = () => {
        this.move("Région");
        this.pose();
    };

    can_read = (card: Card) => {
        return true;
    };
};