import type { Component } from "svelte";

export abstract class Story {
    title: string;
    text: Component | null | undefined;
    id: number = 0;
    unlock: boolean = true;

    constructor(title: string, id: number, text: Component) {
        this.title = title;
        this.id = id;
        this.text = text;
    };
};