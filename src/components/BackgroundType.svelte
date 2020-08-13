<script lang="ts">
    import Typewriter from 'svelte-typewriter';
    import { fade, fly }  from 'svelte/transition';
    import SocialLinks from '../components/SocialLinks.svelte'
    import Logo from '../components/Logo.svelte';
    import NavbarLinks from '../components/NavbarLinks.svelte';

    let isDone = false;

    function handleDone() {
      isDone = true;
    }
</script>

<div class="site-text">
    {#if !isDone}
        <!-- TODO change to 300 when everything is done -->
        <!-- TODO add fade settings after -->
        <Typewriter cascade interval={100} cursor={false} on:done={handleDone}>
            <h1>Welcome!</h1>
        </Typewriter>
    {:else}
        <div class="name-logo-container">
            <Logo/>
            <div class="name-item">Andrew Lee</div>
        </div>
    {/if}
</div>

<style>
    /*TODO make responsive*/
    h1 {
        font-size: 4.0rem;
        margin-block-end: 0;
    }
    .name-logo-container {
        display: flex;
        align-items: center;
    }
    .name-item {
        flex: 1 1 60%;
        font-size: 3rem;
        font-weight: bold;
        margin-left: 1.5rem;
    }

    .site-text {
        display: grid;
        justify-content: center;
        position: absolute;
    }

    .link-color {
        color: black !important;
    }

    @media (min-width: 640px) {
        h1 {
            font-size: 6.5rem;
        }
    }
</style>