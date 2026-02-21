<script lang="ts">
	import { onMount } from "svelte";

	export let text: string = "";

	function typewriter(node: any) {
		const speed = 2;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t: number) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			},
		};
	}

	let show_animation_dialog = false;
	onMount(() => {
		show_animation_dialog = true;
	});
</script>

{#if show_animation_dialog}
	<p transition:typewriter>
		{text}
	</p>
{/if}
