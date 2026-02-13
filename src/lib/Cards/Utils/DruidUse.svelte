<script lang="ts">
    import type { System } from "../../System/Class";

    export let system: System;

    function selectAction(choice: string) {
        if (system.game && system.game.use.card) {
            system.game.use.card.useEffect(choice);
            system.game.use.reset();
        }
    }
</script>

<div class="center" style="text-align:center">
    <button
        class="big choice"
        on:click={() => {
            selectAction("place");
        }}
    >
        Se place sur le terrain
    </button>

    <br />

    <button
        class="big choice"
        on:click={() => {
            selectAction("transform");
        }}
    >
        Se transforme en {system.game.use.card.alternative_form}
    </button>
</div>
