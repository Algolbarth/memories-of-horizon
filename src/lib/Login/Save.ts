import type { System } from "../System/Class";

export function save(system: System) {
    if (system.account) {
        let text = "MoH_";

        text += system.account.name + "_";
        text += system.account.play_time + "_";
        if (system.account.session_time > system.account.best_session_time) {
            text += system.account.session_time + "_";
        }
        else {
            text += system.account.best_session_time + "_";
        }
        text += system.account.ingame_time + "_";

        text += system.account.preconstruct.victory + "_";
        text += system.account.preconstruct.defeat + "_";
        text += system.account.construct.victory + "_";
        text += system.account.construct.defeat + "_";

        text += system.music.volume + "_";
        text += system.settings.show_intelligence + "_";
        text += system.settings.autoplay + "_";
        text += system.settings.auto_speed + "_";
        text += system.settings.show_card_description + "_";

        text += system.decks.length + "_";
        for (const deck of system.decks) {
            text +=
                deck.name +
                "_" +
                deck.victory +
                "_" +
                deck.defeat +
                "_" +
                deck.cards.length +
                "_";
            for (const card of deck.cards) {
                text += card + "_";
            }
        }

        var element = document.createElement("a");
        element.setAttribute(
            "href",
            "data:text/plain;charset=utf-8," + encodeURIComponent(text),
        );
        element.setAttribute("download", "MoH_" + system.account.name);
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
};