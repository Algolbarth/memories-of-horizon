<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";
	import Resolve from "$lib/cards/utils/resolve.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Découvre 3 créatures.

<Resolve bind:system bind:card cost={20} text={"découvre 5 créatures à la place."} />
