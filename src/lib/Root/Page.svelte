<script lang="ts">
	import BlackScreen from "../Account/BlackScreen.svelte";
	import TitleScreen from "../Account/TitleScreen.svelte";
	import Login from "../Account/Login.svelte";
	import Register from "../Account/Register.svelte";
	import Menu from "../Menu/Menu.svelte";
	import Play from "../Play/View.svelte";
	import Wild from "../Play/Wild.svelte";
	import Standard from "../Play/Standard.svelte";
	import Library from "../Library/View.svelte";
	import Profil from "../Profil/View.svelte";
	import Lore from "../Lore/List.svelte";
	import News from "../Menu/News.svelte";
	import Training from "../Training/Main.svelte";
	import Game from "../Game/Game.svelte";
	import Settings from "../Settings/View.svelte";
	import Scenario from "../Game/Scenario.svelte";
	import Victory from "../Game/Victory.svelte";
	import GameOver from "../Game/GameOver.svelte";
	import ModeDecks from "../Deck/SelectMode.svelte";
	import ListDecks from "../Deck/List.svelte";
	import Deck from "../Deck/View.svelte";
	import Add from "../Deck/AddCard.svelte";
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
{:else if system.page == "Standard"}
	<Standard bind:system />
{:else if system.page == "Wild"}
	<Wild bind:system />
{:else if system.page == "Library"}
	<Library bind:system />
{:else if system.page == "Profil" && system.account != undefined}
	<Profil bind:system bind:account={system.account} />
{:else if system.page == "Lore"}
	<Lore bind:system />
{:else if system.page == "News"}
	<News bind:system />
{:else if system.page == "Training"}
	<Training bind:system />
{:else if system.page == "Game" && system.game != undefined}
	<Game bind:system bind:game={system.game} />
{:else if system.page == "Settings"}
	<Settings bind:system />
{:else if system.page == "Scenario" && system.game != undefined && system.game.chapter != undefined}
	<Scenario bind:system bind:chapter={system.game.chapter} />
{:else if system.page == "Victory"}
	<Victory bind:system />
{:else if system.page == "GameOver"}
	<GameOver bind:system />
{:else if system.page == "Decks"}
	<ModeDecks bind:system />
{:else if system.page == "StandardDecks"}
	<ListDecks bind:system bind:decks={system.standard_decks} mode={"Standard"} />
{:else if system.page == "WildDecks"}
	<ListDecks bind:system bind:decks={system.wild_decks} mode={"Libre"} />
{:else if system.page == "Deck" && system.deck != undefined}
	<Deck bind:system bind:deck={system.deck} />
{:else if system.page == "Add" && system.deck != undefined}
	<Add bind:system bind:deck={system.deck} />
{/if}
