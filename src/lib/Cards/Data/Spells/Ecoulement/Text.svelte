<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import Sorcery from "../../../Utils/Sorcery.svelte";

	export let system: System;
	export let card: Card;
</script>

Augmente la production en eau de 3.

<br />
<br />

<Sorcery bind:system bind:card cost={10} text={"augmente la production en eau de 5 à la place."} />
