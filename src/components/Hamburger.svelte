<script>
	import Hoverable from '../utils/Hoverable.svelte';
	export let open = false;

	function handleKeydown(event) {
		if (event.key === "Escape") {
			open = false;
		}
	}
</script>

<svelte:window on:keydown={handleKeydown}/>

<Hoverable class="display-front hamburger-container" let:hovering={hovered}>
	<button class="hamburger" class:open class:hovered on:click={() => open = !open}>
		<svg width=24 height=24>
			<line id="left-a" class:hovered x1=12 y1=2 x2=4 y2=22/>
			<line id="middle-slash" class:hovered x1=7 y1=15 x2=17 y2=15/>
			<line id="right-a" class:hovered x1=12 y1=2 x2=20 y2=22/>
		</svg>
	</button>
</Hoverable>


<style type="text/scss">
	@import '../styles/vars';	
	.hamburger {
        color: $primary-text-color;
        cursor: pointer;
        margin-right: 1rem;
		margin-bottom: 0;
        border-style: none;
		display: flex;
		align-items: center;
		border: 0.125rem solid;
		border-color: $primary-text-color;
		background-color: $primary-base;
        &:focus {
            outline: 0;
		}
		&.open {
			background-color: $primary-sidebar-background;
		}
    }

	svg {
		min-height: 24px;
		transition: $standard-transition;
	}
	
	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: $standard-transition;
		color: $primary-text-color;
	}

	@media screen and (min-width: $small){
		.hovered {
			color: $primary-text-hover-color;
			border-color: $primary-text-hover-color;
		}
	}
	
	.open {
		border-style: hidden;
		transition: $standard-transition;

		#left-a {
			transform: translate(10px, -3px) rotate(25deg)
		}
		#middle-slash {
			opacity: 0;
			transition: transform 0.5s ease-in-out;
		}
		#right-a {
			transform: translate(-7px, 7px) rotate(-25deg)
		}
	}

	:global(body.dark-mode) {
        & .hamburger {
            color: $dark-text-color;
			border-color: $dark-text-color;
			background-color: $dark-base-dark-grey;
			&.open {
				background-color: $dark-sidebar-background;
			}
		}
		& svg line {
			color: $dark-text-color;
		}
		@media screen and (min-width: $small){
			& .hovered {
				color: $dark-text-hover-color;
				border-color: $dark-text-hover-color;
			}
		}
    }
</style>