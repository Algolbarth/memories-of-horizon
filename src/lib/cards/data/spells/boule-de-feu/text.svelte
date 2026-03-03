<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";
	import Sorcery from "$lib/cards/utils/sorcery.svelte";

	export let system: System;
	export let card: Card;
</script>

Inflige 30 dégâts à une unité sur le terrain adverse.

<br />
<br />

<Sorcery bind:system bind:card cost={15} text={"inflige 60 dégâts à la place."} />
