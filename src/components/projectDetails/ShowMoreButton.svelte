<script lang="ts">
    import ExpandArrow from './ExpandArrow.svelte';
    import CollapseArrow from './CollapseArrow.svelte';

    export let showClicked: boolean = false;
    
    function handleClick(): void {
        showClicked = !showClicked;
    }
</script>

<div>
    <button
        on:click={handleClick}
    >
        {#if showClicked}
            Show Less
        {:else}
            Show More
        {/if}
    </button>
    {#if showClicked}
        <CollapseArrow/>
    {:else}
        <ExpandArrow/>
    {/if}
</div>

<style type="text/scss">
    @import '../../styles/vars';

    div {
        display: flex;
        align-items: center;
        margin-top: 0.25em;
        // margin-bottom: 0.25em;
    }

    button {
        border: none;
        background-color: $primary-sidebar-background;
        font-size: 0.67em;
        font-weight: 600;
        text-align: left;
        padding-left: 0;
        cursor: pointer;
        display: flex;
        align-items: baseline;
        margin: 0;
    }

    :global(body.dark-mode) {
        button {
            color: $dark-text-color;
            background-color: $dark-card-description;
        }
    }
</style>