<script lang="ts">
    import Typewriter from 'svelte-typewriter';
    import { fade, fly }  from 'svelte/transition';
    import SocialLinks from '../components/SocialLinks.svelte'
    import Logo from '../components/Logo.svelte';

    let isDone = false;

    function handleDone() {
      isDone = true;
    }

    // interface TypeSpeed {
    //     duration: number,
    //     delay: number,
    // }

    // let welcomeTypeSpeed: TypeSpeed = {duration: 2000, delay: 500}

</script>

<!-- svelte-ignore css-unused-selector -->
<!-- svelte-ignore css-unused-selector -->
<!-- svelte-ignore a11y-missing-content -->
<div class="site-text">
    {#if !isDone}
        <!-- TODO change to 300 when everything is done -->
        <Typewriter cascade interval={100} cursor={false} on:done={handleDone}>
            <h1>Welcome!</h1>
        </Typewriter>
    {:else}
    <div class="name-logo-container">
        <Logo class="logo-item"/>
        <h2 class="name-item">Andrew Lee</h2>
    </div>
    {/if}
    
    <!-- TODO i think something else was here? -->
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

    .logo-item {
        flex: 1 1 20%;
    }

    .name-item {
        flex: 1 1 70%;
    }

    .site-text {
        display: grid;
        justify-content: center;
        position: absolute;
    }

    @media (min-width: 640px) {
        h1 {
            font-size: 6.5rem;
        }
    }
</style>