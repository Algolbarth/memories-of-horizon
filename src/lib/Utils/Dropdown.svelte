<script lang="ts">
	export let array: string[] = [];
	export let selected: string;
	export let selecting: Function = function (element: string) {};
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

<div style:height="1.4em" style:width={width + "vw"}>
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
			<div class="list scroll" style:max-height={height + "vh"}>
				{#each array as element}
					<button
						class="element"
						on:click={() => {
							select(element);
						}}
					>
						{element}
					</button>
					<br />
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
		border: solid;
		padding: 0.2em 1.2em;
	}

	button:hover {
		background: grey;
	}

	button:focus {
		background: grey;
	}

	div.list {
		position: relative;
		background: grey;
		border: solid;
		border-radius: 5px;
		z-index: 1;
	}

	button {
		text-align: center;
		margin: 0;
		border: none;
		background: grey;
		width: 100%;
	}
</style>
