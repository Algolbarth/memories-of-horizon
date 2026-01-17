<script lang="ts">
	export let array: string[] = [];
	export let selected: string;
	export let selecting: Function = (element: string) => {};
	export let height: number = 25;
	export let width: number = 15;

	let isDropdownOpen: boolean = false;

	function handleDropdownClick() {
		isDropdownOpen = !isDropdownOpen;
	}

	const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
		if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return;
		isDropdownOpen = false;
	};

	function select(element: string) {
		selecting(element);
		selected = element;
		isDropdownOpen = false;
	}
</script>

<div style:width={width + "vw"}>
	<div on:focusout={handleDropdownFocusLoss} class="container">
		<div>
			<button class="main" on:click={handleDropdownClick}>
				{#if selected != undefined}
					{selected}
				{:else}
					Liste
				{/if}
			</button>
		</div>

		{#if isDropdownOpen}
			<div class="list scroll" style:max-height={height + "vh"} style:width={width - 0.4 + "vw"}>
				{#each array as element}
					<button
						class="element"
						on:click={() => {
							select(element);
						}}
					>
						{element}
					</button>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	div.container {
		width: 100%;
		display: grid;
		grid-template-rows: auto 1fr;
	}

	button.main {
		padding: 0.2em 0;
		background: var(--dropdown);
		background-image: var(--rock);
		color: white;
		border: solid;
		border-color: black;
	}

	button.main:hover {
		background: var(--dropdown);
		background-image: var(--rock);
		color: gold;
	}

	button.main:focus {
		background: var(--dropdown);
		background-image: var(--rock);
	}

	div.list {
		position: absolute;
		background: var(--dropdown);
		background-image: var(--rock);
		color: white;
		border: solid;
		border-color: black;
		z-index: 1;
		margin-top: 1.75em;
	}

	button {
		text-align: center;
		margin: 0;
		border: none;
		background: transparent;
		width: 100%;
	}
</style>
