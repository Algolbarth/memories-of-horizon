<script lang="ts">
	export let system: any;

	function close() {
		if (system.game == undefined) {
			system.page = "Menu";
		} else {
			system.page = "Game";
		}
	}

	let delay = 5 - system.settings.auto_speed / 500;
</script>

<button
	class="close"
	on:click={() => {
		close();
	}}
>
	X
</button>

<br />
<br />

<div class="zone">
	<div class="slidecontainer">
		<label for="volume"> Musique </label>
		<input
			type="range"
			min="0"
			max="100"
			bind:value={system.music.volume}
			on:change={() => {
				system.music.current.volume = system.music.volume / 100;
			}}
			id="volume"
		/>
		<label for="volume" style="text-align:center;">
			{system.music.volume}%
		</label>
	</div>

	<br />

	<div class="checkbox-container">
		<label class="form-control" for="show_intelligence">
			<input
				type="checkbox"
				bind:checked={system.settings.show_intelligence}
				id="show_intelligence"
			/>
			Afficher l'intelligence totale
		</label>

		<label class="form-control" for="autoplay">
			<input
				type="checkbox"
				bind:checked={system.settings.autoplay}
				id="autoplay"
			/>
			Lance les combats automatiques
		</label>
	</div>

	<br />

	<div class="slidecontainer">
		<label for="delay"> Vitesse des combats automatiques </label>
		<div>
			<input
				type="range"
				min="1"
				max="4"
				bind:value={delay}
				on:change={() => {
					system.settings.auto_speed = (5 - delay) * 500;
				}}
				id="delay"
			/>
		</div>
		<label for="delay" style="text-align:center;">
			{(5 - delay) / 2}s par action
		</label>
	</div>
</div>

<style>
	div.slidecontainer {
		width: 50%;
		display: grid;
		grid-template-columns: 17em 10fr 5fr;
	}
</style>
