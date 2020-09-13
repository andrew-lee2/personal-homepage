<script lang="ts">
	import Logo from '../components/Logo.svelte';
	import Hamburger from '../components/Hamburger.svelte';
    import NavbarMenu from '../components/NavbarMenu.svelte';
    import ToggleSwitch from '../components/ToggleSwitch.svelte';
	
    export let sidebar: Boolean = false;
</script>

<header class="flex navbar-header">
	<nav class="flex">
		<Hamburger bind:open={sidebar}/>
		<Logo/>	
	</nav>
	
    <NavbarMenu/>
    <ToggleSwitch></ToggleSwitch>
</header>

<style type="text/scss">
    @import '../styles/vars';

    .navbar-header {
        justify-content: space-between;
        color: $primary-text-color;
        background-color: $primary-base;
        transition: background-color 0.3s;
        align-items: center;
        padding: 0.5rem;
        border-bottom-width: 2px;
        height: 2.5rem;
    }

    .flex {
        display: flex;
        align-items: center;
    }

    :global(body.dark-mode)  {
        & .navbar-header {
            background-color: $dark-base-dark-grey;
            color: $dark-text-color;
        }
    }
</style>