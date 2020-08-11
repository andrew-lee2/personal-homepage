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