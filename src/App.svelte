<script>
	import BackgroundType from './components/BackgroundType.svelte';
</script>

<main>
	<div class="text-container">
		<BackgroundType/>
	</div>


</main>

<style>
	main {
		text-align: center;
		margin: 0 auto;
		height: 100%;
		overflow: hidden;
		display: grid;
		grid-template-columns: 25px auto auto 25px;
		grid-template-rows: auto auto auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.text-container {
		grid-area: 2 / 2 / 2 / 4;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
			grid-template-columns: 100px auto auto 100px;
		}
		.text-container {
			grid-area: 2 / 2 / 2 / 2;
		}
	}
</style>