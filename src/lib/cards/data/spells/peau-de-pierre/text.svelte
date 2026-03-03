<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";
	import Sorcery from "$lib/cards/utils/sorcery.svelte";

	export let system: System;
	export let card: Card;
</script>

Augmente de 15 l'endurance d'une créature sur votre terrain.

<br />
<br />

<Sorcery bind:system bind:card cost={15} text={"augmente de 30 l'endurance à la place."} />
