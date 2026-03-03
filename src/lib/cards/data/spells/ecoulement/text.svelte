<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";
	import Sorcery from "$lib/cards/utils/sorcery.svelte";

	export let system: System;
	export let card: Card;
</script>

Augmente la production en eau de 3.

<br />
<br />

<Sorcery bind:system bind:card cost={10} text={"augmente la production en eau de 5 à la place."} />
