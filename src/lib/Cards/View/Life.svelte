<script lang="ts">
    import type { Unit } from "../Class";

    export let card: Unit;

    let total_life: number = card.stat("Vitalité").value() + card.stat("Garde").value();
    let ratio_life: number = (100 * card.stat("Santé").value()) / total_life;
    let ratio_hit: number = (100 * (card.stat("Vitalité").value() - card.stat("Santé").value())) / total_life;
    let ratio_guard: number = (100 * card.stat("Garde").value()) / total_life;
</script>

<div class="lifebar">
    <div class="life" style={"width:" + ratio_life + "%"}>Test</div>
    <div style={"width:" + ratio_hit + "%"}>Test</div>
    <div class="guard" style={"width:" + ratio_guard + "%;"}>Test</div>
</div>

{#if card.isDamaged()}
    <div class="row">
        <div>Santé</div>
        <div style="text-align:right;">
            {card.stat("Santé").value()}
        </div>
        <div style="margin-left:0.5em;">
            / {card.stat("Vitalité").value()}
        </div>
        <div style="text-align:right;">Vitalité</div>
    </div>
{:else}
    <div class="row">
        <div>Constitution</div>
        <div style="text-align: right;">
            {card.stat("Constitution").value()}
        </div>
    </div>
{/if}

<style>
    div.row {
        display: grid;
        grid-template-columns: 10em 1fr 1fr 10em;
    }

    div.lifebar {
        background-color: var(--missing_life);
        background-image: var(--paper);
        color: transparent;

        height: 1em;

        border: solid;
        border-color: black;

        display: flex;
    }

    div.life {
        background-color: var(--life);
        background-image: var(--paper);
        display: inline-block;
    }

    div.guard {
        background-color: var(--guard);
        background-image: var(--paper);
        display: inline-block;
    }
</style>
