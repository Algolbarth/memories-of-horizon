import { Story } from '../../story';
import Text from './text.svelte';

export class Chroniques extends Story {
    constructor() {
        super("Chroniques", 0, Text);
    };
}