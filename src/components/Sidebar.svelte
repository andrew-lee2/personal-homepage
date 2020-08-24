<script lang="ts">
    export let open: boolean = false;
    let route: string = window.location.pathname;
</script>

<aside class="sidebar-container" class:open>
	<nav class="sidebar-nav">
        <ul>
            <li><a class="sidebar-link" class:current-site="{route === '/'}" href="/">Home</a></li>
            <li><a class="sidebar-link" class:current-site="{route === '/about'}" href="/about">About</a></li>
            <li><a class="sidebar-link" class:current-site="{route === '/project'}" href="/projects">Projects</a></li>
        </ul>
	</nav>
</aside>

<style type="text/scss">
    @import '../styles/vars';

    .sidebar-container {
        position: absolute;
        width: 50%;
        height: 100%;
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
    .sidebar-link {
        display: inline-flex;
        text-decoration: none;
        padding-bottom: .25em;
        margin: 0.5rem 0;
        color: $primary-text-color;
        &:hover {
            box-shadow: inset 0 -0.2em $primary-highlight;
            color: $primary-text-hover-color;
        }
    }

    .current-site {
        box-shadow: inset 0 -0.2em $primary-highlight;
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