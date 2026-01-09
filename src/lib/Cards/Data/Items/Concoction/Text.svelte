<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import CardInfo from "../../../Utils/CardInfo.svelte";
	import { Concoction } from "./Class";

	export let system: System;
	export let card: Card;
</script>

Applique des effets en fonction des différentes valeurs d'infusion.

{#if card instanceof Concoction && card.hasInfusion()}
	<br />
	<br />
{/if}

<span class="details">
	{#if card.stat("Infusion de mana").value() > 0}
		Produit {card.stat("Infusion de mana").value()} mana.
		<br />
	{/if}

	{#if card.stat("Infusion interdite").value() > 0}
		Génère <CardInfo bind:system name={"Homonculus"} /> sur le terrain. Fixe à {card.stat("Infusion interdite").value()} la constitution et la force de cette carte.
		<br />
	{/if}

	{#if card.stat("Infusion explosive").value() > 0}
		Inflige {card.stat("Infusion explosive").value() * 2} dégâts à une unité sur le terrain.
		<br />
	{/if}

	{#if card.stat("Infusion de soin").value() > 0}
		Soigne {card.stat("Infusion de soin").value() * 2} blessures à une créature sur le terrain.
		<br />
	{/if}

	{#if card.stat("Infusion de force").value() > 0}
		Augmente de {card.stat("Infusion de force").value() * 4} la force d'une créature sur le terrain pendant cette étape.
		<br />
	{/if}

	{#if card.stat("Infusion d'endurance").value() > 0}
		Augmente de {card.stat("Infusion d'endurance").value() * 2} l'endurance d'une créature sur le terrain pendant cette étape.
		<br />
	{/if}

	{#if card.stat("Infusion de résistance").value() > 0}
		Augmente de {card.stat("Infusion de résistance").value() * 2} la résistance d'une créature sur le terrain pendant cette étape.
		<br />
	{/if}

	{#if card.stat("Infusion parfumée").value() >= 5}
		Augmente de {Math.floor(card.stat("Infusion parfumée").value() / 5)} la protection d'une créature sur le terrain pendant cette étape.
		<br />
	{/if}
</span>
