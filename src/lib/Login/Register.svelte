<script>
	import { Account } from "./Account.js";

	export let system;

	let name = "";

	function register() {
		if (name != "") {
			system.account = new Account(system, name);
			system.page = "Menu";
		}
	}
</script>

<div id="body">
	<img src="src/assets/Pictures/Title.png" alt="Logo" class="logo" />

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
