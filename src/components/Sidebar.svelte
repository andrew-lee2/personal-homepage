<script lang="ts">
    import { Router, link } from "svelte-routing";
    import {getContext} from 'svelte';
	import {ROUTER} from 'svelte-routing/src/contexts';
    const { activeRoute } = getContext(ROUTER);
    
    let route: string = '';
    export let open: boolean = false;

	$: {
        if ($activeRoute !== null) {
            route = $activeRoute.uri;
        }
     }

</script>

<aside class="sidebar-container" class:open>
	<nav class="sidebar-nav">
        <Router>
            <ul>
                <li class="sidebar-link-container">
                    <a href="/" use:link class="sidebar-link" class:current-site="{route === '/'}">Home</a>
                </li>
                <li class="sidebar-link-container">
                    <a href="/about" use:link class="sidebar-link" class:current-site="{route === '/about'}" >About</a>
                </li>
                <li class="sidebar-link-container">
                    <a href="/projects" use:link class="sidebar-link" class:current-site="{route === '/projects'}">Projects</a>
                </li>
            </ul>
        </Router>
	</nav>
</aside>

<style type="text/scss">
    @import '../styles/vars';

    .sidebar-container {
        position: absolute;
        width: 60%;
        height: 100vh;
        background-color: $primary-sidebar-background;
        border-right-width: 2px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        z-index: 10;
        @media screen and (min-width: $small){
            width: 15%;
        }
    }
    .sidebar-nav {
        padding: 3rem;
        font-size: 1.25rem;
    }

	aside {
		left: -100%;
		transition: left 0.3s ease-in-out
	}
	
	.open {
		left: 0
    }
    
    .sidebar-link-container {
        margin: 0.9rem 0;
        .sidebar-link {
            text-decoration: none;
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
            .sidebar-link {
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

    ul {
        padding: 0;
    }
    li {
        list-style: none;
    }

    :global(body.dark-mode)  {
        & .sidebar-container {
            background-color: $dark-sidebar-background;
        }
        & .sidebar-link {
            color: $dark-text-color;
            &:hover {
                color: $dark-text-hover-color;
            }
        }
    }
</style>