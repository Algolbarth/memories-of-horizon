import { Account } from "./Account.js";
import { Deck } from "../Decks/Deck.js";

let step;
let save;

export async function load(files, system) {
    if (files != undefined) {
        save = await files[0].text();
        step = 0;

        if (readValue() != "MoH") {
            console.log("Ce fichier n'est pas une sauvegarde pour MoH");
            return undefined;
        }

        system.account = new Account(system, readValue());
        system.account.aventure.victory = readInt();
        system.account.aventure.defeat = readInt();
        system.account.construct.victory = readInt();
        system.account.construct.defeat = readInt();
        system.music.volume = readInt();
        system.settings.show_intelligence = readBool();
        system.settings.autoplay = readBool();
        system.settings.auto_speed = readInt();

        let number_decks = readInt();
        for (let i = 0; i < number_decks; i++) {
            let deck = new Deck(system);
            deck.changeName(readValue(), 0);
            deck.victory = readInt();
            deck.defeat = readInt();
            let cards = readInt();
            for (let j = 0; j < cards; j++) {
                let name = readValue();
                if (system.cards.getByName(name) != undefined) {
                    deck.add(name);
                }
            }
            system.decks.push(deck);
        }

        system.page = "Menu";

        return System;
    }
}

function readValue() {
    let value = '';
    while (save[step] != '_' && step < save.length) {
        value += save[step];
        step++;
    }
    step++;

    if (value != 'undefined') {
        return value;
    } else {
        return undefined;
    }
}

function readInt() {
    let value = readValue();
    if (value != undefined) {
        return parseInt(value);
    } else {
        return undefined;
    }
}

function readBool() {
    let value = readValue();
    if (value == 'true') {
        return true;
    } else if (value == 'false') {
        return false;
    }
}