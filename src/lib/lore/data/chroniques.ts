import { Story } from '$lib/lore/class';

export class Chroniques extends Story {
    constructor() {
        super('Chroniques', 0);

        this.addList([
            ["?", "Guerre antique des déités"],
            ["?", "Apparition de Golgoth"],
            ["?", "Première expansion"],
            ["?", "Seconde expansion"],
            ["?", "Grande guerre"],
            ["0", "Création de l'Empire"],
            ["?", "Règne de l'Empereur doré"],
            ["?", "Guerre des 7 grands pêchés"],
            ["?", "Règne de l'Empereur barbare"],
            ["?", "Règne de l'Empereur haut-elfe"],
            ["?", "Règne de l'Empereur wyverne"],
            ["?", "Bataille des récifs noirs"],
            ["?", "Retour des Succubes"],
            ["?", "Guerre du flambeau"]
        ]);
    };
};