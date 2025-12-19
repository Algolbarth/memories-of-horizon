<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand une carte alliée est posée : diminue son coût de 10.
<br />
Augmente de 1 la taille de toutes les zones alliées.
