import { Story } from '$lib/lore/class';
import Text from './text.svelte';

export class HistoireImperiale extends Story {
    constructor() {
        super("Histoire impériale", 2, Text);
    };
}