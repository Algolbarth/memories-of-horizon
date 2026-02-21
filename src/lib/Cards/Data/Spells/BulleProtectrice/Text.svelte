<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import Sorcery from "../../../Utils/Sorcery.svelte";

	export let system: System;
	export let card: Card;
</script>

Augmente de 20 la garde d'une créature alliée sur le terrain pendant ce tour.

<br />
<br />

<Sorcery bind:system bind:card cost={25} text={"augmente de 20 la garde à la place."} />
