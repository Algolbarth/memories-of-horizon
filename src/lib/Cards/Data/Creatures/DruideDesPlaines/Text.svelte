<script>
	import CardInfo from "../../../Utils/Info.svelte";

	export let system;
	export let card;
</script>

Quand posé, au choix :
<ul>
	<li>
		Se transforme en <CardInfo
			bind:system
			name={"Druide des plaines (forme humain)"}
		/>.
	</li>
	<li>
		Se transforme en <CardInfo
			bind:system
			name={"Druide des plaines (forme loup)"}
		/>.
	</li>
</ul>

{#if card.name == "Druide des plaines (forme humain)"}
	Au début de la phase de préparation : pioche 2 cartes.
{/if}
