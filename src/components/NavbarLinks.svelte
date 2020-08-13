<script lang="ts">
    import { fade } from 'svelte/transition';

    export let white: boolean = false;
    export let showHome: boolean = true;
    export let transitions: boolean = false;

    interface NavbarLink {
        name: string;
        route: string;
    }
    interface NavbarLinks extends Array<NavbarLink>{}

    let navbarLinks: NavbarLinks = [
        {name: "About", route: "/about"},
        {name: "Projects", route: "/projects"},
    ]

    if (showHome) {
        navbarLinks.unshift({name: "Home", route: "/"});
    }
</script>

{#each navbarLinks as navbarLink}
    {#if transitions}
        <p 
            class="navbar-link" class:white
            in:fade="{{ duration: 2000, delay: 500 }}" out:fade
        >
            <a href={navbarLink.route}>{navbarLink.name}</a>
        </p>
    {:else}
        <p class="navbar-link" class:white>
            <a href={navbarLink.route}>{navbarLink.name}</a>
        </p>
    {/if} 
{/each}

<style type="text/scss">
    @import '../styles/vars';
    
    .navbar-link {
        font-size: 18px;
    }
    .white {
        color: #FFFFFF;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
</style>