import { Deck } from "./Class";

export class StandardDeck extends Deck {
    canModify = () => {
        return false;
    };

    isPlayable = () => {
        return true;
    };
};