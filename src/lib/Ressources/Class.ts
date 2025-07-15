export class Ressource {
    name: string;
    background_color: string;
    font_color: string;
    light_font: boolean;

    constructor(name: string, background_color: string, font_color: string, light_font: boolean = false) {
        this.name = name;
        this.background_color = background_color;
        this.font_color = font_color;
        this.light_font = light_font;
    };
};

export let ressources = [
    new Ressource("Or", "rgba(200, 150, 0, 1)", "rgba(200, 150, 0, 1)"),
    new Ressource("Feu", "rgba(150, 0, 0, 1)", "rgba(150, 0, 0, 1)"),
    new Ressource("Eau", "rgba(50, 50, 200, 1)", "rgba(50, 50, 200, 1)", true),
    new Ressource("Air", "rgba(150, 150, 150, 1)", "rgba(100, 100, 100, 1)"),
    new Ressource("Terre", "rgba(100, 50, 0, 1)", "rgba(100, 50, 0, 1)", true),
    new Ressource("Végétal", "rgba(0, 150, 0, 1)", "rgba(0, 150, 0, 1)"),
    new Ressource("Mort", "rgba(0, 0, 100, 1)", "rgba(0, 0, 100, 1)", true),
    new Ressource("Arcane", "rgba(150, 0, 255, 1)", "rgba(150, 0, 255, 1)"),
    new Ressource("Metal", "rgba(50, 50, 50, 1)", "rgba(50, 50, 50, 1)", true),
    new Ressource("Foudre", "rgba(255, 255, 100, 1)", "rgba(255, 255, 100, 1)"),
    new Ressource("Glace", "rgba(0, 200, 200, 1)", "rgba(0, 200, 200, 1)", true),
    new Ressource("Lumière", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)"),
    new Ressource("Ombre", "rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 1)", true),
    new Ressource("Mana", "rgba(0, 255, 255, 1)", "rgba(0, 255, 255, 1)"),
];
