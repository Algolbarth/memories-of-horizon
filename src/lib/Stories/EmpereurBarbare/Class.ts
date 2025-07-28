import { Story } from '../Story';
import Text from './Text.svelte';

export class EmpereurBarbare extends Story {
    constructor() {
        super("L'Empereur barbare", 3, Text);
    };
}