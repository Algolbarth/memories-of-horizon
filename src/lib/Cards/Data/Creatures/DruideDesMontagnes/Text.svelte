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
			name={"Druide des montagnes (forme nain)"}
		/>.
	</li>
	<li>
		Se transforme en <CardInfo
			bind:system
			name={"Druide des montagnes (forme ours)"}
		/>.
	</li>
</ul>

{#if card.name == "Druide des montagnes (forme nain)"}
	Au début de la phase de préparation : augmente son attaque et sa vie de 10.
{/if}
