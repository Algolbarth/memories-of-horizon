<script>
	import CardInfo from "../../../Utils/Info.svelte";

	export let system;
	export let card;
</script>

Quand posé : inflige autant de dégâts que possible à une unité adverse et
dépense autant d'or.
<br />
Quand meurt : se transforme en <CardInfo bind:system name={"Chevalier noir"} />,
se soigne toutes ses blessures et reste sur le terrain.
