<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Si la pile alliée est vide : découvre 5 cartes.
<br />
<br />
Résolution 30 : Si la pile alliée est vide : découvre autant de carte que nécessaire pour remplir la pile.
