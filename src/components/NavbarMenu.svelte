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
        <div class="nav-link-container">
            <a href="/" use:link class="link-hover" class:current-site="{route === '/'}">Home</a>
        </div>
        <div class="nav-link-container">
            <a href="/about" use:link class="link-hover" class:current-site="{route === '/about'}">About</a>
        </div>
        <div class="nav-link-container">
            <a href="/projects" use:link class="link-hover" class:current-site="{route === '/projects'}">Projects</a>
        </div>
    </Router>
</nav>

<style type="text/scss">
     @import '../styles/vars';
    .navbar-menu {
        display: none;
        margin-left: auto;
        @media screen and (min-width: $small){
            display: flex;
            height: 100%;
            align-items: center;
            
        }        
    }

    a {
        text-decoration: none;
    }

    .nav-link-container {
        margin-right: 2rem;
        .link-hover {
            color: $primary-text-color;
            transition: $nav-animate;
            position: relative;
            &:before,
            &:after {
                @include underline();
            }
        }
        &:hover {
            cursor: pointer;
            .link-hover {
                color: $primary-text-hover-color;
                &:before,
                &:after {
                    @include show-underline();
                }
            }
        }
        .current-site {
            &:before,
            &:after {
                @include show-underline();
            }
        }
    }

    :global(body.dark-mode)  {
        & .link-hover {
            color: $dark-text-color;
            &:hover {
                color: $dark-text-hover-color;
            }
        }
    }
</style>