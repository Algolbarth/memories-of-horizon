<script>
	import CardInfo from "../../../Utils/Info.svelte";

	export let system;
	export let card;
</script>

Quand posé : crée 2 <CardInfo bind:system name={"Chien"} /> sur le terrain.
<br />
<br />
Au début de la phase de préparation : crée <CardInfo
	bind:system
	name={"Chien"}
/> sur le terrain.
