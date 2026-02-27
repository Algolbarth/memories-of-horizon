import type { System } from '../system/class';
import { shuffle } from '../utils';

export class Music {
    current: HTMLAudioElement | undefined = undefined;
    volume: number = 50;
    albums: Album[] = [];
    list: Song[] = [];
    slot: number = 0;
    system: System;

    constructor(system: System) {
        this.system = system;
    };

    init() {
        let mtg_arena = new Album("MTG Arena Soundtrack", "mtg-arena");
        mtg_arena.add("1");
        mtg_arena.add("2");
        mtg_arena.add("3");
        mtg_arena.add("4");
        this.albums.push(mtg_arena);

        for (const album of this.albums) {
            for (const song of album.list) {
                this.list.push(song);
            }
        }

        shuffle(this.list);
    };

    play() {
        if (this.slot < this.list.length - 1) {
            this.current = new Audio("/music/" + this.list[this.slot].album.repo + "/" + this.list[this.slot].name + ".mp3");
            this.current.addEventListener("ended", () => {
                this.slot++;
                this.play();
            });
            this.current.volume = this.volume / 100;
            this.current.play();
        } else {
            this.slot = 0;
            this.play();
        }
    };

    stop() {
        if (this.current != undefined) {
            this.current.pause();
            this.current.currentTime = 0;
        }
    };
};

class Album {
    name: string;
    repo: string;
    list: Song[] = [];

    constructor(name: string, repo: string) {
        this.name = name;
        this.repo = repo;
    };

    add(name: string) {
        this.list.push(new Song(name, this));
    };
};

class Song {
    name: string;
    album: Album;

    constructor(name: string, album: Album) {
        this.name = name;
        this.album = album;
    };
};