<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import Resolve from "../../../utils/resolve.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand posé : <Resolve bind:system bind:card cost={20} text={"augmente de 10 sa constitution et sa force."} />
