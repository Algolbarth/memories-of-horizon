<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import Source from "../../../Utils/Source.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Augmente de 15 la constitution et la force d'une créature alliée d'élément Eau sur le terrain.

<br />
<br />

<Source bind:system bind:card cost={15} text={"augmente de 30 à la place."} />
