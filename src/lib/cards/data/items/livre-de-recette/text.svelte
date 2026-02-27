<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import Resolve from "../../../utils/resolve.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Découvre 3 cartes de famille Nourriture.

<Resolve bind:system bind:card cost={20} text={"découvre 5 cartes de famille Nourriture à la place."} />
