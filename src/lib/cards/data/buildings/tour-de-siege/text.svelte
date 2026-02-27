<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Au début d'un round : augmente de 10 la constitution et la force de la créature alliée sur le terrain la plus en avant.
