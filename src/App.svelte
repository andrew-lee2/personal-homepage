<script>
	import BackgroundType from './components/BackgroundType.svelte';
	export let name;
</script>

<main>
<!--	TODO make some components-->
	<div class="text-container">
		<BackgroundType/>
	</div>


</main>

<style>
	main {
		/*TODO might have to change this*/
		text-align: center;
		/*max-width: 240px;*/
		margin: 0 auto;
		height: 100%;
		overflow: hidden;
		display: grid;
		/*TODO make the grid gutter responsive*/
		grid-template-columns: 100px auto auto 100px;
		grid-template-rows: auto auto auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.text-container {
		grid-area: 2 / 2 / 2 / 2;
		/*justify-items: left;*/
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>