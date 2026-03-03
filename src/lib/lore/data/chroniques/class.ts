import { Story } from '$lib/lore/class';
import Text from './text.svelte';

export class Chroniques extends Story {
    constructor() {
        super("Chroniques", 0, Text);
    };
}