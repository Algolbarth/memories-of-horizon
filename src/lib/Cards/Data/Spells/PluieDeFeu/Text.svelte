<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import Sorcery from "../../../Utils/Sorcery.svelte";

	export let system: System;
	export let card: Card;
</script>

Inflige 10 dégâts à toutes les unités adverses sur le terrain.

<br />
<br />

<Sorcery bind:system bind:card cost={50} text={"inflige 20 dégâts à la place."} />
