<script>
    import Typewriter from 'svelte-typewriter';
    import { fade, fly } from 'svelte/transition';

    let isDone = false;

    function handleDone() {
      isDone = true;
    }
</script>

<div class="site-text">
    <!--TODO do we need to have another sentence?-->
    <Typewriter cascade interval={100} cursor={false} on:done={handleDone}>
        <h1>Welcome!</h1>
    </Typewriter>

<!--    TODO dont make this a list let it fade in one at a time?-->
    {#if isDone}
        <div class="logo-block" in:fade="{{ duration: 2000, delay: 1000 }}" out:fade>
<!--            TODO make a new logo that links to my about section-->
            <a href="https://github.com/andrew-lee2">
                <img class="logo" src="./static/images/github.svg" alt="Github logo">
            </a>

            <a href="https://github.com/andrew-lee2">
                <img class="logo" src="./static/images/github.svg" alt="Github logo">
            </a>

            <a href="https://www.linkedin.com/in/andrewlee10/">
                <img class="logo" src="./static/images/linkedin.svg" alt="Linkedin logo">
            </a>
        </div>
    {/if}
</div>

<style>
    /*TODO make responsive*/
    h1 {
        font-size: 6.5rem;
        margin-block-end: 0;
    }

    ul {
        list-style-type: none;
    }


    .site-text {
        display: grid;
        justify-content: center;
    }

    .logo-block {
        display: flex;
        justify-content: space-between;
        /*TODO change to rem*/
        width: 200px;
    }
    .logo {
        height: 40px;
    }

    a {
        color: black;
    }

    a:link {
        /*TODO maybe change the color for everything*/
        color: black;
    }

    a:hover {
        color: red;
    }
</style>