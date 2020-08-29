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
        height: 100%;
    }
	:global(body) {
		padding: 0;
		background-color: #f2eee2;
		color: #0084f6;
		transition: background-color 0.3s
	}
	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
	}
</style>
