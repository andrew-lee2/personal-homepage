<script lang="ts">
    // https://github.com/EmilTholin/svelte-routing/issues/122
    export let location: any;
</script>

<main>
    <p>Page under construction</p>
</main>

<style type="text/scss">
    @import '../styles/vars';
    main {
        height: 100%;
        width: 100%;
        background-color: $primary-base;
		transition: background-color 0.3s;
    }

    p {
        height: 65%;
        width: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
    }

    :global(body.dark-mode)  {
        & main {
		    background-color: $dark-base-dark-grey;
        }
    }
</style>