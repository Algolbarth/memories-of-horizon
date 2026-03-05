<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

S'équipe à une créature sur votre terrain.

<br />
<br />

Quand une créature alliée est posée : si équipé et que le porteur est sur le terrain : augmente la constitution et la force de cette créature du même montant que le niveau du porteur.
