import { Zone } from "./Zone";

export class Stack extends Zone {
    base_level: number = 1;
    step_level: number = 0;
    upgrade_cost: number = 10;

    constructor() {
        super("Pile", 10);
    };

    level = () => {
        let total: number = this.base_level + this.step_level;

        if (total <= 0) {
            total = 1;
        }

        return total;
    };
};