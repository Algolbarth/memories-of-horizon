<script>
	import CardInfo from "../../../Info.svelte";

	export let system;
	export let card;
</script>

Quand posé, au choix :
<ul>
	<li>
		Se transforme en <CardInfo
			bind:system
			name={"Druide marchand (forme humain)"}
		/>.
	</li>
	<li>
		Se transforme en <CardInfo
			bind:system
			name={"Druide marchand (forme boeuf)"}
		/>.
	</li>
</ul>

{#if card.name == "Druide marchand (forme humain)"}
	Au début de la phase de préparation : augmente de 1 la capacité en or.
{/if}
