<script lang="ts">
	import Logo from "../Menu/Logo.svelte";
	import type { System } from "../System/Class";
	import { Account } from "./Account";

	export let system: System;

	let name: string = "";

	function register() {
		if (name != "") {
			system.account = new Account(system, name);
			system.page = "Menu";
		}
	}
</script>

<div id="body">
	<Logo />

	<br />

	<button
		on:click={() => {
			system.page = "TitleScreen";
		}}
	>
		Retour
	</button>

	<br />
	<br />

	Nom du compte
	<br />

	<input type="text" bind:value={name} />

	<br />
	<br />

	<button
		class="big menu"
		on:click={() => {
			register();
		}}
	>
		Valider
	</button>
</div>

<style>
	#body {
		text-align: center;
	}

	input[type="text"] {
		text-align: center;
		border-bottom: solid;
		border-color: black;
	}
</style>
