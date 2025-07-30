<script lang="ts">
	import type { System } from "../System/Class";

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
				Total des parties : {system.account.total_match()}
				<br />
				Victoires : {system.account.total_victory()}
				<br />
				Défaites : {system.account.total_defeat()}
			</div>

			<div>
				Mode aventure : {system.account.aventure.total()}
				<br />
				Victoires : {system.account.aventure.victory}
				<br />
				Défaites : {system.account.aventure.defeat}
			</div>

			<div>
				Mode construit : {system.account.construct.total()}
				<br />
				Victoires : {system.account.construct.victory}
				<br />
				Défaites : {system.account.construct.defeat}
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
