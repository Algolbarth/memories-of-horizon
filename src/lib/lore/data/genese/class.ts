import { Story } from '$lib/lore/class';
import Text from './text.svelte';

export class Genese extends Story {
    constructor() {
        super("Génèse", 1, Text);
    };
}