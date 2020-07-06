<script>
    import BackgroundType from '../components/BackgroundType.svelte';
    import Hoverable from '../utils/Hoverable.svelte';
    import {clickOutside} from '../utils/clickOutside';
    import { fade, fly } from 'svelte/transition';
    let showNav = false;

    function handleNavClick() {
        showNav = !showNav;
    }
</script>

<main>
<!--    TODO make own component eventually-->
    {#if !showNav}
<!--        <Hoverable let:hovering={hovering}>-->
            <div class="logo-container"
                 on:mouseenter={handleNavClick}
                 in:fade="{{ duration: 500}}"
                 out:fade="{{ duration: 300}}">
                <img
                        on:click={handleNavClick}
                        class="logo"
                        src="./static/images/logo.svg"
                        alt="logo for website"
                />
            </div>
<!--        </Hoverable>-->
    {/if}

    {#if showNav}
<!--    TODO make a transition for this-->
<!--FIXME i think only one of the mouse on on:click needs to be depending on enviroment-->
        <div
                use:clickOutside
                on:click_outside={handleNavClick}
                on:mouseleave={handleNavClick}
                in:fade="{{ duration: 300}}" out:fade="{{ duration: 300}}"
                class="navbar"
        >
    <!--        TODO idk if we want to duplicate this-->
            <div class="navbar-container">
                <img class="logo"
                     src="./static/images/logo.svg"
                     alt="logo for website"/>
                <p class="navbar-link">
                    <a href="/">Home</a>
                </p>
                <p class="navbar-link">
                    <a href="/about">About</a>
                </p>
            </div>
        </div>
    {/if}

    <div class="text-container">
        <BackgroundType/>
    </div>
</main>

<style>
    main {
        text-align: center;
        margin: 0 auto;
        height: 100%;
        overflow: hidden;
        display: grid;
        grid-template-columns: 25px 33% auto auto 25px;
        grid-template-rows: 25% 25% 25% 25%;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    .text-container {
        grid-area: 2 / 2 / 2 / 4;
    }
    .logo-container {
        display: flex;
        grid-area: 1 / 1 / 1 / 1;
    }
    .logo {
        height: 45px;
        width: 45px;
    }
    .navbar {
        grid-area: 1 / 1 / 5 / 3;
        /*TODO choose different color, maybe dark grey transparent?*/
        background-color: grey;
        z-index: 2;
        justify-items: center;
        padding-top: 20px;
        max-height: 100%;
    }

    .navbar-container {
        display: grid;
        justify-items: center;
    }

    .navbar-link {
        font-size: 18px;
        color: #FFFFFF;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    @media (min-width: 640px) {
        main {
            grid-template-columns: 100px 100px auto auto 100px;
        }
        .text-container {
            grid-area: 2 / 3 / 4 / 4;
        }
    }
</style>