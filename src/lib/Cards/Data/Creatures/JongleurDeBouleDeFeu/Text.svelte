<script>
	import CardInfo from "../../../Info.svelte";

	export let system;
	export let card;
</script>

Quand <CardInfo bind:system name={"Boule de feu"} /> est posée : crée <CardInfo
	bind:system
	name={"Boule de feu"}
/> dans la boutique.
