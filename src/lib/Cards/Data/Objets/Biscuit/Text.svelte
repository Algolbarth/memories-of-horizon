<script>
	import CardInfo from "../../../Info.svelte";

	export let system;
	export let card;
</script>

Soigne 25 blessures à une créature alliée sur le terrain. Si cette créature
n'est pas blessée, crée un <CardInfo bind:system name={"Bonhomme biscuit"} /> sur
le terrain.
