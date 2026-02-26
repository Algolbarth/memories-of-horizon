<script lang="ts">
  import Root from "../lib/Root/Page.svelte";
  import { System } from "../lib/System/Class";
  import "../styles/app.css";
  import "../styles/div.css";
  import "../styles/button.css";
  import "../styles/input.css";

  let system: System = new System();
  system.importCards();
  system.importChapters();
  system.importDecks();
  system.importLore();
  system.music.init();
  system.game = undefined;

  let timeHandler = () => {
    if (system.account != undefined) {
      system.account.play_time++;
      system.account.session_time++;

      if (system.game != undefined && system.game.mode != "Entraînement") {
        system.account.ingame_time++;
      }
    }
  };

  setInterval(timeHandler, 1000);
</script>

<div class="window">
  <div class="body">
    <Root bind:system />
  </div>
</div>
