<script>
	import { Account } from "./Account.js";

	export let system;

	function invite() {
		system.account = new Account(system, "Invité");
		system.page = "Menu";
	}
</script>

<div class="container">
	<img src="src/assets/Pictures/Title.png" alt="Logo" class="logo" />

	<br />

	<button
		class="big menu"
		on:click={() => {
			system.page = "Login";
		}}
	>
		Connexion
	</button>

	<br />

	<button
		class="big menu"
		on:click={() => {
			system.page = "Register";
		}}
	>
		Inscription
	</button>

	<br />
	<br />

	<button
		on:click={() => {
			invite();
		}}
	>
		Jouer en tant qu'invité
	</button>
</div>

<style>
	div.container {
		text-align: center;
	}
</style>
