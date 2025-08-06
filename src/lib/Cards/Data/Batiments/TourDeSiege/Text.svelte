<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Au début d'un tour de combat : augmente de 10 l'attaque et la vie de la créature alliée sur le terrain la plus en avant.
