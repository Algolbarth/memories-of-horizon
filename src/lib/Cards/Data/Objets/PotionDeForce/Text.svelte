<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Augmente de 4 l'attaque d'une créature alliée sur le terrain pendant cette étape pour chaque valeur d'infusion.

<br />
<br />

<i>
	Augmente de {card.stat("Infusion").value() * 4} l'attaque d'une créature alliée sur le terrain pendant cette étape.
</i>
