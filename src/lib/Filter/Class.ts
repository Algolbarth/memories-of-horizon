import type { Card } from "../Cards/Class";
import type { System } from "../System/Class";

export class Filter {
    system: System;

    levels: string[] = ["Tous"];
    types: string[] = ["Tous", "Action", "Bâtiment", "Créature", "Objet", "Lieu"];
    families: string[] = ["Toutes"];
    elements: string[] = ["Tous"];

    select_name: string = "";
    select_level: string = "Tous";
    select_type: string = "Tous";
    select_family: string = "Toutes";
    select_element: string = "Tous";
    select_common: boolean = true;
    select_rare: boolean = false;
    select_legendary: boolean = false;

    constructor(system: System) {
        this.system = system;

        for (let i = 0; i < 20; i++) {
            this.levels.push("" + (i + 1));
        }
    };

    resetSelection() {
        this.select_name = "";
        this.select_level = "Tous";
        this.select_type = "Tous";
        this.select_family = "Toutes";
        this.select_element = "Tous";

        this.select_common = true;
        this.select_rare = false;
        this.select_legendary = false;
    };

    isReset() {
        if (this.select_name != "" || this.select_level != "Tous" || this.select_type != "Tous" || this.select_family != "Toutes" || this.select_element != "Tous" || this.select_common == false || this.select_rare == true || this.select_legendary == true) {
            return false;
        }
        return true;
    };

    changeSelection(name: string, level: string, type: string, family: string, element: string, common: boolean, rare: boolean, legendary: boolean) {
        this.select_name = name;
        this.select_level = level;
        this.select_type = type;
        this.select_family = family;
        this.select_element = element;

        this.select_common = common;
        this.select_rare = rare;
        this.select_legendary = legendary;
    };

    filterString(names: string[], sort_type: string, condition: Function | undefined = undefined) {
        let cards: Card[] = [];

        for (const name of names) {
            cards.push(this.system.cards.getByName(name));
        }

        cards = this.filterCards(cards, sort_type, condition);

        names = [];
        for (const card of cards) {
            names.push(card.name);
        }

        return names;
    };

    filterCards(cards: Card[], sort_type: string, condition: Function | undefined = undefined) {
        let tab = [];

        for (const card of cards) {
            let name = card.name.toLowerCase();

            if ((this.select_name == "" || name.includes(this.select_name.toLowerCase())) && (this.select_level == "Tous" || card.level == parseInt(this.select_level)) && (this.select_type == "Tous" || card.type == this.select_type) && (this.select_family == "Toutes" || card.isFamily(this.select_family)) && (this.select_element == "Tous" || card.isElement(this.select_element)) && ((this.select_legendary && card.trait("Légendaire").value()) || (this.select_rare && card.trait("Rare").value()) || (this.select_common && !card.trait("Légendaire").value() && !card.trait("Rare").value())) && (condition == undefined || condition(card))) {
                tab.push(card);
            }
        }

        tab = this.sortCards(tab, sort_type);

        return tab;
    };

    sortCards(tab: Card[], type: string) {
        if (type == "Nom") {
            for (let i = 0; i < tab.length; i++) {
                let j = i;
                while (j > 0 && tab[j].name < tab[j - 1].name) {
                    let swap = tab[j];
                    tab[j] = tab[j - 1];
                    tab[j - 1] = swap;

                    j--;
                }
            }
        }
        else if (type == "Niveau") {
            for (let i = 0; i < tab.length; i++) {
                let j = i;
                while (j > 0 && tab[j].level < tab[j - 1].level) {
                    let swap = tab[j];
                    tab[j] = tab[j - 1];
                    tab[j - 1] = swap;
                    j--;
                }
            }
        }

        return tab;
    };
};
