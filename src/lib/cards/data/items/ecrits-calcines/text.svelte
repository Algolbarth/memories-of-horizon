<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import Resolve from "../../../utils/resolve.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Si la pile alliée est vide : découvre 5 cartes.

<Resolve bind:system bind:card cost={125} text={"découvre autant de carte que nécessaire pour remplir la pile à la place."} />
