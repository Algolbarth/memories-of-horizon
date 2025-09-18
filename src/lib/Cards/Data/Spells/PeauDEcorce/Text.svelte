<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import Sorcery from "../../../Utils/Sorcery.svelte";

	export let system: System;
	export let card: Card;
</script>

Augmente de 20 la constitution d'une créature alliée sur le terrain.

<br />
<br />

<Sorcery bind:system bind:card cost={15} text={"augmente de 45 la constitution à la place."} />
