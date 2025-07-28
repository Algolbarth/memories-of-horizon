import { Story } from '../Story';
import Text from './Text.svelte';

export class Chroniques extends Story {
    constructor() {
        super("Chroniques", 0, Text);
    };
}