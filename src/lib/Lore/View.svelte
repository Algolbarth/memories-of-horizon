<script lang="ts">
	import type { Story } from "./Story";

	export let story: Story;
	export let view: Story | undefined;
</script>

<div class="window">
	<div class="body">
		<div id="story" class="scroll">
			<div id="text" class="parchment">
				<div class="title">{story.title}</div>

				<br />
				<br />
				<br />

				<hr />

				<div id="space"></div>

				<svelte:component this={story.text} />
			</div>
		</div>

		<button
			class="square close seal"
			on:click={() => {
				view = undefined;
			}}
		>
			X
		</button>
	</div>
</div>

<style>
	#story {
		position: fixed;
		top: 0;
		height: 100vh;
		margin-left: 27vw;
		width: 46vw;
		text-align: justify;
		box-shadow:
			inset 0px 25px 10px -15px rgba(0, 0, 0, 0.5),
			inset 0px -25px 10px -15px black;
	}

	#text {
		padding: 3vw;
		padding-top: 40vh;
		padding-bottom: 25vh;
	}

	.parchment {
		box-shadow:
			2px 3px 20px black,
			0 0 60px #8a4d0f inset;
		background: var(--story);
		filter: url(#wavy2);
	}

	#space {
		height: 40vh;
	}

	div.title {
		text-align: center;
		font-size: 2em;
	}

	hr {
		overflow: visible;
		padding: 0;
		border: none;
		border-top: medium double black;
		border-width: 0.5em;
		text-align: center;
		box-shadow: inset 0 1em 1em -1em rgba(0, 0, 0, 0.3);
	}

	hr:after {
		content: "§";
		display: inline-block;
		position: relative;
		top: -0.9em;
		font-size: 1.5em;
		padding: 0 0.25em;
		background: var(--story);
	}

	.window {
		background: var(--shadow);
	}

	button.close {
		position: fixed;
		margin-left: 70.25vw;
		width: 2.5vw;
		height: 2.5vw;
	}
</style>
