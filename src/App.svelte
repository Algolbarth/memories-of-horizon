<script lang="ts">
  import Root from "./lib/Root/Page.svelte";
  import { System } from "./lib/System/Class";

  let system = new System();
  system.music.init();

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
