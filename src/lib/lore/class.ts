export abstract class Story {
    title: string;
    text: string = "";
    id: number = 0;
    unlock: boolean = true;

    constructor(title: string, id: number) {
        this.title = title;
        this.id = id;
    };

    addText(text: string) {
        this.text += "<p>" + text + "</p>";
    };

    addList(elements: string[][]) {
        this.text += "<div style='display: grid;'>";
        for (let i = 0; i < elements.length; i++) {
            this.addRow(elements[i]);
        }
        this.text += "</div>";
    };

    addRow(element: string[]) {
        let date = element[0];
        let title = element[1];

        this.text += "<div style='display: grid; grid-template-columns: 1fr 6fr;'>";
        this.text += "<div>" + date + "</div>";
        this.text += "<div>" + title + "</div>";
        this.text += "</div>";
    };
};