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

    canRead = (card: Card) => {
        return true;
    };
};