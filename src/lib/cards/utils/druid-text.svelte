<script lang="ts">
    import type { System } from "../../system/class";
    import type { Card } from "../class";
    import CardInfo from "./card-info.svelte";

    export let system: System;
    export let card: Card;
</script>

Quand posé, au choix :
<ul>
    <li>Se place sur le terrain.</li>
    <li>
        Se transforme en <CardInfo bind:system name={card.alternative_form} />.
    </li>
</ul>
