<script lang="ts">
  import Root from "./lib/Root/Page.svelte";
  import { System } from "./lib/System/Class";

  let system = new System();
  system.music.init();
</script>

<div class="window">
  <div class="body">
    <Root bind:system />
  </div>
</div>
