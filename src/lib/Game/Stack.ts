import { Zone } from "./Zone";

export class Stack extends Zone {
    base_level: number = 1;
    step_level: number = 0;

    constructor() {
        super("Pile", 10);
    };

    level = () => {
        return this.base_level + this.step_level;
    };
};