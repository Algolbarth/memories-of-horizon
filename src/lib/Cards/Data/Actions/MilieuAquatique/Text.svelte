<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import Source from "../../../Utils/Source.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Augmente de 5 la constitution et la force de toutes les créatures alliées d'élément Eau sur le terrain.

<br />
<br />

<Source bind:system bind:card cost={50} text={"augmente de 10 à la place."} />
