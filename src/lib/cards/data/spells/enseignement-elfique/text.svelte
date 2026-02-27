<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import Sorcery from "../../../utils/sorcery.svelte";

	export let system: System;
	export let card: Card;
</script>

Augmente de 5 l'intelligence d'une créature alliée sur le terrain.

<br />
<br />

<Sorcery bind:system bind:card cost={25} text={"augmente de 10 l'intelligence à la place."} />
