<script lang="ts">
	import type { System } from "../System/Class";

	export let system: System;
</script>

<button
	class="close"
	on:click={() => {
		system.page = "Menu";
	}}
>
	X
</button>
