import { Story } from '../../Story';
import Text from './Text.svelte';

export class HistoireImperiale extends Story {
    constructor() {
        super("Histoire impériale", 2, Text);
    };
}