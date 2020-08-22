<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Projects from "./pages/Projects.svelte";

	export let url = "";
</script>

<Router url="{url}">
	<div>
		<Route path="/"><Home /></Route>
		<Route path="about" component="{About}" />
		<Route path="projects" component="{Projects}" />
	</div>
</Router>

<style>
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
