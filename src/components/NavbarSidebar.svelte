<script>
	export let open = false
</script>

<aside class="sidebar-container" class:open>
	<nav class="sidebar-nav">
		<a class="block" href="#about">About</a>
		<a class="block" href="#contact">Contact</a>
	</nav>
</aside>

<style type="text/scss">
    .sidebar-container {
        position: absolute;
        width: 100%;
        height: 100%;
        color: #edf2f7;
        border-right-width: 2px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
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
    .block {
        display: block;
    }
</style>