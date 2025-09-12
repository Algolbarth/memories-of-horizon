import type { System } from "../System/Class";

export class Account {
    name: string;
    aventure: Gamemode = new Gamemode();
    construct: Gamemode = new Gamemode();
    system: System;

    constructor(system: System, name: string) {
        this.system = system;
        this.name = name;
    };

    total_victory = () => {
        return this.aventure.victory + this.construct.victory;
    };

    total_defeat = () => {
        return this.aventure.defeat + this.construct.defeat;
    };

    total_match = () => {
        return this.aventure.total() + this.construct.total();
    };
}

class Gamemode {
    victory: number = 0;
    defeat: number = 0;

    total() {
        return this.victory + this.defeat;
    };
}