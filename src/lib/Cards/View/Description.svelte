<script lang="ts">
	import type { Card } from "../Class";

	export let card: Card;
</script>

<div class="box">
	<i>Description</i>
	<div style="text-align:center;">
		"{@html card.description()}"
	</div>
</div>
