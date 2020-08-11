<script lang="ts">
    import {clickOutside} from '../utils/clickOutside';
    import { fade, fly } from 'svelte/transition';

    let showNav: boolean = false;
    
    function handleNavClick() {
        showNav = !showNav;
    }

    // TODO is there a common way to have interfaces in TS?
    // https://github.com/alm-tools/alm/blob/master/src/common/types.ts
    interface FadeSettings {
        duration: number;
    }

    let hoverFadeDur500: FadeSettings = {duration: 500};
    let hoverFadeDur300: FadeSettings = {duration: 300};

</script>

<!--    TODO make own component eventually-->
{#if !showNav}
    <div class="logo-container"
        on:mouseenter={handleNavClick}
        in:fade="{hoverFadeDur500}"
        out:fade="{hoverFadeDur300}">
        <img
            on:click={handleNavClick}
            class="logo"
            src="./static/images/logo.svg"
            alt="logo for website"
        />
    </div>
{/if}

{#if showNav}
<!--    TODO make a transition for this-->
<!--FIXME i think only one of the mouse on on:click needs to be depending on enviroment-->
    <div
        use:clickOutside
        on:click_outside={handleNavClick}
        on:mouseleave={handleNavClick}
        
        in:fade="{hoverFadeDur300}" out:fade="{hoverFadeDur300}"
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

<style>
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


</style>