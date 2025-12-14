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
        grid-template-columns: 12em 2fr 2fr 14em;
    }

    div.lifebar {
        background: rgb(178, 123, 131);
        color: transparent;

        height: 1.5em;

        border: solid;
        border-color: black;

        display: flex;
    }

    div.life {
        background: rgb(255, 176, 189);
        display: inline-block;
    }

    div.guard {
        background: rgb(249, 106, 130);
        display: inline-block;
    }
</style>
