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
    .navbar-header {
        justify-content: space-between;
        background-color: #edf2f7;
        color: #718096;
        align-items: center;
        padding: 0.5rem;
        border-bottom-width: 2px;
        height: 2.5rem;
        // TODO sidebar breaks if we fix it 
        // position: fixed;
        // width: 100%;
        // top: 0;
    }

    .flex {
        display: flex;
    }
</style>