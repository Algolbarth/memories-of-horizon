<script lang="ts">
	import BlackScreen from "../Login/BlackScreen.svelte";
	import TitleScreen from "../Login/TitleScreen.svelte";
	import Login from "../Login/Login.svelte";
	import Register from "../Login/Register.svelte";
	import Menu from "../Menu/Menu.svelte";
	import Play from "../Menu/Play.svelte";
	import Construit from "../Menu/Construct.svelte";
	import Library from "../Menu/Library.svelte";
	import Profil from "../Menu/Profil.svelte";
	import Universe from "../Stories/List.svelte";
	import News from "../Menu/News.svelte";
	import Training from "../Training/Main.svelte";
	import Game from "../Game/Game.svelte";
	import Settings from "../Settings/View.svelte";
	import Dialog from "../Game/Dialog.svelte";
	import Victory from "../Game/Victory.svelte";
	import GameOver from "../Game/GameOver.svelte";
	import Decks from "../Decks/List.svelte";
	import Deck from "../Decks/Deck.svelte";
	import Add from "../Decks/Add.svelte";
	import type { System } from "../System/Class";

	export let system: System;
</script>

{#if system.page == "BlackScreen"}
	<BlackScreen bind:system />
{:else if system.page == "TitleScreen"}
	<TitleScreen bind:system />
{:else if system.page == "Login"}
	<Login bind:system />
{:else if system.page == "Register"}
	<Register bind:system />
{:else if system.page == "Menu"}
	<Menu bind:system />
{:else if system.page == "Play"}
	<Play bind:system />
{:else if system.page == "Construit"}
	<Construit bind:system />
{:else if system.page == "Library"}
	<Library bind:system />
{:else if system.page == "Profil" && system.account != undefined}
	<Profil bind:system bind:account={system.account} />
{:else if system.page == "Universe"}
	<Universe bind:system />
{:else if system.page == "News"}
	<News bind:system />
{:else if system.page == "Training"}
	<Training bind:system />
{:else if system.page == "Game" && system.game != undefined}
	<Game bind:system bind:game={system.game} />
{:else if system.page == "Settings"}
	<Settings bind:system />
{:else if system.page == "Dialog"}
	<Dialog bind:system />
{:else if system.page == "Victory"}
	<Victory bind:system />
{:else if system.page == "GameOver"}
	<GameOver bind:system />
{:else if system.page == "Decks"}
	<Decks bind:system />
{:else if system.page == "Deck"}
	<Deck bind:system />
{:else if system.page == "Add"}
	<Add bind:system />
{/if}
