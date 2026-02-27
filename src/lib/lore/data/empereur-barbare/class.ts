import { Story } from '../../story';
import Text from './text.svelte';

export class EmpereurBarbare extends Story {
    constructor() {
        super("L'Empereur barbare", 3, Text);
    };
}