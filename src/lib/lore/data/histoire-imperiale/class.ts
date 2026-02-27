import { Story } from '../../story';
import Text from './text.svelte';

export class HistoireImperiale extends Story {
    constructor() {
        super("Histoire impériale", 2, Text);
    };
}