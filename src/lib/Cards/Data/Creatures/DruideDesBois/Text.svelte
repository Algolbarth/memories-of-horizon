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
			name={"Druide des bois (forme elfe)"}
		/>.
	</li>
	<li>
		Se transforme en <CardInfo
			bind:system
			name={"Druide des bois (forme renard)"}
		/>.
	</li>
</ul>

{#if card.name == "Druide des bois (forme elfe)"}
	Quand une action alliée est jouée : augmente de 3 sa vie.
{/if}
