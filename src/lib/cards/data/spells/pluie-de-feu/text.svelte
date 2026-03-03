<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";
	import Sorcery from "$lib/cards/utils/sorcery.svelte";

	export let system: System;
	export let card: Card;
</script>

Inflige 10 dégâts à toutes les unités sur le terrain adverse.

<br />
<br />

<Sorcery bind:system bind:card cost={50} text={"inflige 20 dégâts à la place."} />
