<script lang="ts">
    export let time: number;

    $:days = Math.floor(time / (24 * 3600));
    $:hours = Math.floor((time % (24 * 3600)) / 3600);
    $:minutes = Math.floor((time % 3600) / 60);
    $:seconds = time % 60;
</script>

{#if days > 0}
    {days}d
{/if}

{#if days > 0 || hours > 0}
    {hours}h
{/if}

{#if days > 0 || hours > 0 || minutes > 0}
    {minutes}min
{/if}

{seconds}s
