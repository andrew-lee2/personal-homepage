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
        <!-- TODO add fade settings after -->
        <Typewriter cascade interval={100} cursor={false} on:done={handleDone}>
            <h1>Welcome!</h1>
        </Typewriter>
    {:else}
        <div class="name-logo-container">
            <Logo/>
            <p class="name-item">Andrew Lee</p>
        </div>
        
        <!-- FIXME need to pass in different color and then have to iterate thru? -->
        <div class="temp">
            <NavbarLinks showHome={false} transitions={true}></NavbarLinks>
        </div>

    {/if}
    
    <!-- TODO i think something else was here need to do the drop down? -->
</div>

<style>
    /*TODO make responsive*/
    h1 {
        font-size: 4.0rem;
        margin-block-end: 0;
    }
    .temp {
        display: grid;
        justify-items: center;
    }
    
    .name-logo-container {
        display: flex;
        align-items: center;
    }

    .logo-item {
        flex: 1 1 20%;
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