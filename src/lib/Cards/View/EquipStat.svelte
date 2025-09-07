<script lang="ts">
    import type { Equipment } from "../Class/Equipment";

    export let card: Equipment;
</script>

<div class="box">
    <i>Statistiques d'équipement</i>

    <br />

    {#each card.equipStats as e}
        {#if e.value() > 0}
            {e.name} : {e.value()}

            <br />
        {/if}
    {/each}
</div>
