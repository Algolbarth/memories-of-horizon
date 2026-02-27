<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import Source from "../../../utils/source.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Augmente de 5 la constitution et la force de toutes les créatures alliées d'élément Eau sur le terrain.

<Source bind:system bind:card cost={50} text={"augmente de 10 à la place."} />
