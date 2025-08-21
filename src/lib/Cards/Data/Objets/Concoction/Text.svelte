<script lang="ts">
	import type { System } from "../../../../System/Class";
    import type { Card } from "../../../Class";
    import { Concoction } from "./Class";

	// svelte-ignore export_let_unused
	export let system: System;
	export let card: Card;
</script>

S'utilise sur une créature alliée sur le terrain. Applique des effets en fonction des différentes valeurs d'infusion.

{#if card instanceof Concoction && card.hasInfusion()}
	<br />
	<br />
{/if}

<i>
	{#if card.stat("Infusion de soin").value() > 0}
		Soigne {card.stat("Infusion de soin").value() * 2} blessures à une créature alliée sur le terrain.
		<br />
	{/if}

	{#if card.stat("Infusion de mana").value() > 0}
		Produit {card.stat("Infusion de mana").value()} mana.
		<br />
	{/if}

	{#if card.stat("Infusion de force").value() > 0}
		Augmente de {card.stat("Infusion de force").value() * 4} l'attaque d'une créature alliée sur le terrain pendant cette étape.
		<br />
	{/if}

	{#if card.stat("Infusion de solidité").value() > 0}
		Augmente de {card.stat("Infusion de solidité").value() * 2} la défense d'une créature alliée sur le terrain pendant cette étape.
		<br />
	{/if}
</i>
