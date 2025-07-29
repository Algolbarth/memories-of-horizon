<script lang="ts">
    import { Unit, type Card } from "../Class";

	export let card:Card;
</script>

<div class="box">
	<i>Statistiques</i>
	<br />

	{#if card instanceof Unit}
		Vie : {card.stat("Vie").current} / {card.stat("Vie").value()}
		<br />
	{/if}

	{#if card instanceof Unit && card.stat("Garde").value() > 0}
		Garde : {card.stat("Garde").value()}
		<br />
	{/if}

	{#if card instanceof Unit && card.stat("Défense").value() > 0}
		Défense : {card.stat("Défense").value()}
		<br />
	{/if}

	{#if card instanceof Unit && card.stat("Esquive").value() > 0}
		Esquive : {card.stat("Esquive").value()}
		<br />
	{/if}

	{#if card instanceof Unit && card.stat("Protection").value() > 0}
		Protection : {card.stat("Protection").value()}
		<br />
	{/if}

	{#if card instanceof Unit && card.stat("Actions").value() > 1}
		Actions : {card.stat("Actions").value()}
		<br />
	{/if}

	{#if card instanceof Unit && card.stat("Vitesse").value() > 0}
		Vitesse : {card.stat("Vitesse").value()}
		<br />
	{/if}

	{#if card.type == "Créature"}
		Attaque : {card.stat("Attaque").value()}
		<br />
	{/if}

	{#if card.type == "Créature" && card.stat("Percée").value() > 0}
		Percée : {card.stat("Percée").value()}
		<br />
	{/if}

	{#if card.type == "Créature" && card.stat("Adresse").value() > 0}
		Adresse : {card.stat("Adresse").value()}
		<br />
	{/if}

	{#if card.type == "Créature" && (card.stat("Critique").current > 0 || card
				.stat("Adresse")
				.value() > 0)}
		Critique : {card.stat("Critique").current} %
		<br />
	{/if}

	{#if card.type == "Créature" && card.stat("Intensité").value() != 2}
		Intensité : x{card.stat("Intensité").value()}
		<br />
	{/if}

	{#if card instanceof Unit && card.stat("Multicoup").value() > 1}
		Multicoup : {card.stat("Multicoup").value()}
		<br />
	{/if}

	{#if card.type == "Créature" && card.stat("Maniement").value() > 1}
		Maniement : {card.stat("Maniement").value()}
		<br />
	{/if}

	{#if card instanceof Unit && card.stat("Magie").value() > 0}
		Magie : {card.stat("Magie").value()}
		<br />
	{/if}

	{#if card instanceof Unit && card.stat("Intelligence").value() > 0}
		Intelligence : {card.stat("Intelligence").value()}
		<br />
	{/if}

	{#if card.stat("Perpétuité").current > 0}
		Perpétuité : {card.stat("Perpétuité").current}
		<br />
	{/if}

	{#if card.type == "Créature" && card.stat("Étourdissement").value() > 0}
		Étourdissement : {card.stat("Étourdissement").value()}
		<br />
	{/if}

	{#if card.stat("Infusion")}
		Infusion : {card.stat("Infusion").value()}
		<br />
	{/if}
</div>
