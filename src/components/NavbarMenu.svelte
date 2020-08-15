<nav class="navbar-menu">
    <a href="/about" class="navbar-link">About</a>
    <a href="/contact" class="navbar-link">Contact</a>
</nav>

<!-- FIXME -->
<style type="text/scss">
     @import '../styles/vars';
    .navbar-menu {
        // display: none;
        color: #a0aec0;
        font-weight: bold;
        // TODO make a responsive small block
        display: none;    
        @media screen and (min-width: $small){
            display: block;
        }        
    }

    .navbar-link {
        &:hover {
            color: #4a5568;
            // TODO need to style the underline
        }
    }
</style>