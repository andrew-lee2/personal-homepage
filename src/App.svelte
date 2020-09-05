<script lang="ts">
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Projects from "./pages/Projects.svelte";
	import Navbar from './components/Navbar.svelte';
	import Sidebar from './components/Sidebar.svelte';

	export let url: string = "";
	let open: boolean = false;
</script>

<Router url="{url}">
	<div class="fix-navbar">
		<Sidebar bind:open/>
		<Navbar bind:sidebar={open}/>
	</div>
	
	<div>
		<Route path="about" component="{About}" />
		<Route path="projects" component="{Projects}" />
		<Route path="/"><Home /></Route>
	</div>
</Router>

<style type="text/scss">
	@import './styles/vars';
    .fix-navbar {
        position: fixed;
        width: 100%;
    }
	:global(body) {
		padding: 0;
		transition: background-color 0.3s
	}

	div {
		background-color: $primary-base;
	}

	:global(body.dark-mode)  {
        & div {
		    background-color: $dark-base-dark-grey;
        }
	}
</style>
