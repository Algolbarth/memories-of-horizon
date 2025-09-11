<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
    import Sorcery from "../../../Utils/Sorcery.svelte";

	export let system: System;
	export let card: Card;
</script>

Inflige 30 dégâts à une unité adverse sur le terrain.

<br />
<br />

<Sorcery bind:system bind:card cost={15} text={"inflige 60 dégâts à la place."} />
