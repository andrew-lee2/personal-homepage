<div class="logo-container">
	<svg width=100% height=30>
		<text x=0 y=22>Andrew Lee</text>
	</svg>
</div>

<style type="text/scss">
	@import '../styles/vars';
	text {
		fill: $primary-text-color;
		font-size: 1.5rem;
	}
	.logo-container {
		display: flex;
		align-items: center;
		z-index: 30;
		height: 100%;
	}

	:global(body.dark-mode)  {
		& text {
			fill: $dark-text-color;
		}
	}
</style>