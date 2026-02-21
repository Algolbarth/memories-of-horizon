import { Card } from './Class';

export class Location extends Card {
    type = "Lieu";

    canUse = () => {
        if (this.owner().zone("Région").isNotFull()) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        this.move("Région");
        this.pose();
    };

    canRead = (card: Card) => {
        return true;
    };
};