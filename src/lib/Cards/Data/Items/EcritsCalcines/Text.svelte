<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import Resolve from "../../../Utils/Resolve.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Si la pile alliée est vide : découvre 5 cartes.

<Resolve bind:system bind:card cost={30} text={"découvre autant de carte que nécessaire pour remplir la pile à la place."} />
