<script lang="ts">
    import type { System } from "$lib/system/class";
    import type { Druid } from "../class/druid";
    import CardInfo from "./card-info.svelte";

    export let system: System;
    export let card: Druid;
</script>

Quand posé, au choix :
<ul>
    <li>Se place sur le terrain.</li>
    <li>
        Se transforme en <CardInfo bind:system name={card.alternative_form} />.
    </li>
</ul>
