export abstract class Story {
    title: string;
    text: __sveltets_2_IsomorphicComponent;
    id: number = 0;
    unlock: boolean = true;

    constructor(title: string, id: number, text: __sveltets_2_IsomorphicComponent) {
        this.title = title;
        this.id = id;
        this.text = text;
    };
};