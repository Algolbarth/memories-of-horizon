<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import Sorcery from "../../../utils/sorcery.svelte";

	export let system: System;
	export let card: Card;
</script>

Augmente de 20 la garde d'une créature alliée sur le terrain pendant ce tour.

<br />
<br />

<Sorcery bind:system bind:card cost={25} text={"augmente de 20 la garde à la place."} />
