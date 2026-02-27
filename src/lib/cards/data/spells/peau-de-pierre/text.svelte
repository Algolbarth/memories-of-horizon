<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import Sorcery from "../../../utils/sorcery.svelte";

	export let system: System;
	export let card: Card;
</script>

Augmente de 15 l'endurance d'une créature alliée sur le terrain.

<br />
<br />

<Sorcery bind:system bind:card cost={15} text={"augmente de 30 l'endurance à la place."} />
