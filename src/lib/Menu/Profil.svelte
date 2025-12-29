<script lang="ts">
	import type { System } from "../System/Class";
    import { several } from "../Utils";

	export let system: System;

	let name: string = system.account?.name;

	function rename() {
		if (system.account) {
			system.account.name = name;
		}
	}
</script>

<button
	class="close"
	on:click={() => {
		system.page = "Menu";
	}}
>
	X
</button>

<br />
<br />

{#if system.account}
	<div class="zone">
		<input type="text" bind:value={name} />
		{#if name != system.account.name}
			<button on:click={rename}> Renommer </button>
		{/if}

		<br />
		<br />

		<div class="container">
			<div>
				Total de parties : {system.account.total_match()}
				<br />
				{several(system.account.total_victory(), ["Victoire"], "after")}
				<br />
				{several(system.account.total_defeat(), ["Défaite"], "after")}
			</div>

			<div>
				Mode pré-construit : {system.account.preconstruct.total()}
				<br />
				{several(system.account.preconstruct.victory, ["Victoire"], "after")}
				<br />
				{several(system.account.preconstruct.defeat, ["Défaite"], "after")}
			</div>

			<div>
				Mode construit : {system.account.construct.total()}
				<br />
				{several(system.account.construct.victory, ["Victoire"], "after")}
				<br />
				{several(system.account.construct.defeat, ["Défaite"], "after")}
			</div>
		</div>
	</div>
{/if}

<style>
	div.container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
</style>
