<script lang="ts">
	import Logo from '../components/Logo.svelte';
	import Hamburger from '../components/Hamburger.svelte';
    import NavbarMenu from '../components/NavbarMenu.svelte';
    import ToggleSwitch from '../components/ToggleSwitch.svelte';
	
    export let sidebar: Boolean = false;
    // let darkMode: Boolean = false;
    // console.log(darkMode);
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
        // TODO sidebar breaks if we fix it 
        // position: fixed;
        // width: 100%;
        // top: 0;
        // background-color: $dark-base-dark-grey;
        // color: $dark-text-color;
    }

    .flex {
        display: flex;
    }

    :global(body.dark-mode)  {
        & .navbar-header {
            background-color: $dark-base-dark-grey;
            // background-color: $dark-darker-dark-grey;
            color: $dark-text-color;
        //     color: $primary-text-color;
        // background-color: $primary-base;
        }
    }
</style>