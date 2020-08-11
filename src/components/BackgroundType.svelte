<script lang="ts">
    import Typewriter from 'svelte-typewriter';
    import { fade, fly }  from 'svelte/transition';
    import SocialLinks from '../components/SocialLinks.svelte'

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

<!-- svelte-ignore a11y-missing-content -->
<div class="site-text">
    <!--TODO do we need to have another sentence?-->
    <Typewriter cascade interval={100} cursor={false} on:done={handleDone}>
        <h1>Welcome!</h1>
    </Typewriter>

<!--    TODO dont make this a list let it fade in one at a time?-->
    {#if isDone}
        <SocialLinks/>
    {/if}
</div>

<style>
    /*TODO make responsive*/
    h1 {
        font-size: 4.0rem;
        margin-block-end: 0;
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