<script>
	export let system;

	let name = system.account.name;
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

<input type="text" bind:value={name} />
{#if name != system.account.name}
	<button
		on:click={() => {
			system.account.name = name;
		}}
	>
		Renommer
	</button>
{/if}

<br /><br />

Total des parties : {system.account.total_match()}
<br />
Victoires : {system.account.total_victory()}
<br />
Défaites : {system.account.total_defeat()}

<br /><br />

Mode aventure : {system.account.aventure.total()}
<br />
Victoires : {system.account.aventure.victory}
<br />
Défaites : {system.account.aventure.defeat}

<br /><br />

Mode construit : {system.account.construct.total()}
<br />
Victoires : {system.account.construct.victory}
<br />
Défaites : {system.account.construct.defeat}
