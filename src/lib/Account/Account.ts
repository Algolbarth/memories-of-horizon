import type { System } from "../System/Class";

export class Account {
    name: string;
    standard: Gamemode = new Gamemode();
    wild: Gamemode = new Gamemode();
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
        return this.standard.victory + this.wild.victory;
    };

    total_defeat = () => {
        return this.standard.defeat + this.wild.defeat;
    };

    total_match = () => {
        return this.standard.total() + this.wild.total();
    };
};

class Gamemode {
    victory: number = 0;
    defeat: number = 0;

    total() {
        return this.victory + this.defeat;
    };
};