<script lang="ts">
    let route: string = window.location.pathname;
</script>

<nav class="navbar-menu">
    <a href="/" class="navbar-link" class:current-site="{route === '/'}">Home</a>
    <a href="/about" class="navbar-link" class:current-site="{route === '/about'}">About</a>
    <a href="/projects" class="navbar-link" class:current-site="{route === '/projects'}">Projects</a>
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
        &:hover {
            color: #4a5568;
        }
    }
    a {
        margin-right: 2rem;
        text-decoration: none;
        padding-bottom: .25em;
        &:hover {
            box-shadow: inset 0 -0.2em red;
        }
    }
    .current-site {
        box-shadow: inset 0 -0.2em pink;
    }
</style>