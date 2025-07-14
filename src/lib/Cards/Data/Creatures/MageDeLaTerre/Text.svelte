<script>
	import CardInfo from "../../../Info.svelte";

	export let system;
	export let card;
</script>

Quand une carte alliée de famille Sort est posée : crée un <CardInfo
	bind:system
	name={"Élémentaire de caillou"}
/> dans la main.
