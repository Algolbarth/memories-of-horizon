import type { System } from '../System/Class';
import { shuffle } from '../Utils';

export class Music {
    current: HTMLAudioElement | undefined = undefined;
    volume: number = 50;
    list: number[] = [];
    slot: number = 0;
    number: number = 4;
    system: System;

    constructor(system: System) {
        this.system = system;
    };

    init() {
        for (let i = 1; i < this.number; i++) {
            this.list.push(i);
        }
        shuffle(this.list);
    };

    play() {
        if (this.slot < this.list.length - 1) {
            this.current = new Audio("/Music/" + this.list[this.slot] + ".mp3");
            this.current.addEventListener("ended", function () {
                this.play();
            });
            this.current.volume = this.volume / 100;
            this.current.play();
            this.slot++;
        } else {
            this.slot = 0;
            this.play();
        }
    };
};