<script>
    import BackgroundType from '../components/BackgroundType.svelte';
    import {clickOutside} from '../utils/clickOutside';
    let showNav = false;

    function handleNavClick() {
        showNav = !showNav;
        console.log(showNav);
    }
</script>

<main>
<!--    TODO make own component eventually-->
    <div class="logo-container">
        <img
                on:click={handleNavClick}
                class="logo"
                src="./static/images/logo.svg"
                alt="logo for website"
        />
    </div>

    {#if showNav}
<!--    TODO make a transition for this-->
    <div use:clickOutside on:click_outside={handleNavClick} class="navbar">
<!--        TODO idk if we want to duplicate this-->
        <div class="navbar-container">
            <img class="logo"
                 src="./static/images/logo.svg"
                 alt="logo for website"/>
            <p class="navbar-link">
                <a href="/about">About</a>
            </p>
        </div>
    </div>
    {/if}

    <div class="text-container" on:click={handleNavClick}>
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
        grid-template-rows: auto auto auto;
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
        grid-area: 1 / 1 / 1 / 1;
    }
    .logo {
        height: 45px;
        width: 45px;
    }
    .navbar {
        grid-area: 1 / 3 / 4 / 1;
        /*TODO choose different color, maybe dark grey transparent?*/
        background-color: grey;
        z-index: 2;
    }

    .navbar-container {
        display: grid;
        justify-items: center;
        padding-top: 20px;
    }

    .navbar-link {
        padding: 10px;
        font-size: 18px;
        color: #FFFFFF;
    }

    .hidden {
        display: none
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
            grid-area: 2 / 2 / 2 / 2;
        }
    }
</style>