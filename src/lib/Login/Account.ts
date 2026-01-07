import type { System } from "../System/Class";

export class Account {
    name: string;
    preconstruct: Gamemode = new Gamemode();
    construct: Gamemode = new Gamemode();
    system: System;
    play_time: number = 0;
    session_time: number = 0;
    best_session_time: number = 0;
    ingame_time: number = 0;

    constructor(system: System, name: string) {
        this.system = system;
        this.name = name;
    };

    total_victory = () => {
        return this.preconstruct.victory + this.construct.victory;
    };

    total_defeat = () => {
        return this.preconstruct.defeat + this.construct.defeat;
    };

    total_match = () => {
        return this.preconstruct.total() + this.construct.total();
    };
};

class Gamemode {
    victory: number = 0;
    defeat: number = 0;

    total() {
        return this.victory + this.defeat;
    };
};