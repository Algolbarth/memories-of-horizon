import { Zone } from "./Zone";

export class Shop extends Zone {
    level: number = 1;

    constructor() {
        super("Boutique", 10);
    };
}