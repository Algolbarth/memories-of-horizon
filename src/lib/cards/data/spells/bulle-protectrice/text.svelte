<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";
	import Sorcery from "$lib/cards/utils/sorcery.svelte";

	export let system: System;
	export let card: Card;
</script>

Augmente de 20 la garde d'une créature sur votre terrain pendant ce tour.

<br />
<br />

<Sorcery bind:system bind:card cost={25} text={"augmente de 20 la garde à la place."} />
