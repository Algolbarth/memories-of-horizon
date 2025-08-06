import type { System } from "../System/Class";

export class Chapter {
    steps = [];
    ressources = [];
    boss: boolean = false;
    system: System;
    number: number;

    constructor(system: System, number: number) {
        this.system = system;
        this.number = number;
    };

    init = function () {
        this.system.game.player.step = 1;
        this.system.game.bot.step = 0;

        for (const ressource of this.ressources) {
            this.system.game.bot.ressource(ressource.name).max = ressource.value;
        }
    };

    addRessource = function (name: string, value: number) {
        this.ressources.push({
            name: name,
            value: value
        });
    };

    addStep = function (life: number, place: string, cards: string[], dialogs: string[] = []) {
        this.steps.push(new Step(life, place, cards, dialogs));
    };

    startDialog = function () {
        let step = this.steps[this.system.game.player.step - 1];
        if (!step.read && step.dialog < step.dialogs.length) {
            this.system.page = "Dialog";
        }
        else {
            step.read = true;
            this.system.page = "Game";
        }
    };

    nextDialog = function () {
        let step = this.steps[this.system.game.player.step - 1];
        if (!step.read && step.dialog < step.dialogs.length - 1) {
            step.dialog++;
            this.system.page = "Dialog";
        }
        else {
            step.read = true;
            this.system.page = "Game";
        }
    };

    getLevel = function () {
        if (this.level == undefined) {
            let total = 0;
            for (const ressource of this.ressources) {
                total += ressource.value;
            }

            let level = 1;
            let array = [
                10,
                25,
                50,
                75,
                100,
                150,
                200,
                250,
                325,
                400,
                500,
                600,
                700,
                850,
                1000,
                1250,
                1500,
                2000,
                2500,
                3000

            ];

            while (total > array[level - 1] && level < 20) {
                level++;
            }

            return level;
        }
        else {
            return this.level;
        }
    };
};

export class Step {
    life: number;
    place: string;
    cards: string[];
    dialogs: string[];
    dialog: number = 0;
    read: boolean = false;

    constructor(life: number, place: string, cards: string[], dialogs: string[]) {
        this.life = life;
        this.place = place;
        this.cards = cards;
        this.dialogs = dialogs;
    };
};