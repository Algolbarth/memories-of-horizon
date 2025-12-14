import { Zone } from "./Zone";

export class Stack extends Zone {
    level: number = 1;

    constructor() {
        super("Pile", 10);
    };
};