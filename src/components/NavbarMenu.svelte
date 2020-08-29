<script lang="ts">
    import { Router, link } from "svelte-routing";
    import {getContext} from 'svelte';
	import {ROUTER} from 'svelte-routing/src/contexts';
    const { activeRoute } = getContext(ROUTER);
    
    let route: string = '';

	$: {
        if ($activeRoute !== null) {
            route = $activeRoute.uri;
        }
     }
</script>

<nav class="navbar-menu">
    <Router>
        <a href="/" use:link class="navbar-link" class:current-site="{route === '/'}">Home</a>
        <a href="/about" use:link class="navbar-link" class:current-site="{route === '/about'}">About</a>
        <a href="/projects" use:link class="navbar-link" class:current-site="{route === '/projects'}">Projects</a>
    </Router>
</nav>

<style type="text/scss">
     @import '../styles/vars';
    .navbar-menu {
        color: #a0aec0;
        display: none;
        margin-left: auto;
        @media screen and (min-width: $small){
            display: flex;
            height: 100%;
            align-items: center;
            
        }        
    }

    .navbar-link {
        color: $primary-text-color;
        &:hover {
            color: $primary-text-hover-color;
        }
    }
    a {
        margin-right: 2rem;
        text-decoration: none;
        padding-bottom: .25em;
        &:hover {
            box-shadow: inset 0 -0.2em $primary-highlight;
        }
    }
    .current-site {
        box-shadow: inset 0 -0.2em $primary-highlight;
    }

    :global(body.dark-mode)  {
        & .navbar-link {
            color: $dark-text-color;
            &:hover {
                color: $dark-text-hover-color;
            }
        }
    }
</style>