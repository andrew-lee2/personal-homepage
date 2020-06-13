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
        <div class="logo-block" in:fade="{{ duration: 2000, delay: 500 }}" out:fade>
<!--            TODO make a new logo that links to my about section-->
            <a class="icon icon-al" href="https://github.com/andrew-lee2"></a>
            <a class="icon icon-github" href="https://github.com/andrew-lee2/"></a>
            <a class="icon icon-linkedin" href="https://www.linkedin.com/in/andrewlee10/"></a>
        </div>
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
    }

    .logo-block {
        display: flex;
        justify-content: space-around;
        /*TODO change to rem*/
        width: 200px;
    }

    .icon {
        display: inline-block;
        width: 30px;
        height: 30px;
        background-size: cover;
    }

    .icon-al {
        /*TODO change me*/
        background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/icon-bike-black.svg);
    }

    .icon-github {
        background-image: url(../static/images/github.svg);
    }

    .icon-linkedin {
        background-image: url(../static/images/linkedin.svg);
    }

    .icon-al:hover,
    .icon-al:focus,
    .icon-github:hover,
    .icon-github:focus,
    .icon-linkedin:hover,
    .icon-linkedin:focus {
        /*hex color #a9a9a9*/
        filter: invert(86%) sepia(4%) saturate(0%) hue-rotate(7deg) brightness(82%) contrast(76%);
    }

    @media (min-width: 640px) {
        h1 {
            font-size: 6.5rem;
        }

        .logo-block {
            justify-content: space-between;
        }
        .icon {
            width: 40px;
            height: 40px;
        }
    }
</style>