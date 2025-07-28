<script>
	import CardInfo from "../../../Utils/Info.svelte";

	export let system;
	export let card;
</script>

Au début d'un tour de combat : crée <CardInfo
	bind:system
	name={"Soldat nain"}
/> sur le terrain.
