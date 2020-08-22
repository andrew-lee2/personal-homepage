<script>
	export let open = false
</script>

<button class="hamburger" class:open on:click={() => open = !open}>
	<svg width=24 height=24>
		<line id="left-a" x1=12 y1=2 x2=4 y2=22/>
		<line id="middle-slash" x1=7 y1=15 x2=17 y2=15/>
		<line id="right-a" x1=12 y1=2 x2=20 y2=22/>
	</svg>
</button>

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
		

        &:hover {
			// TODO need to get color for this
            color: #4a5568;
        }
        &:focus {
            outline: 0;
        }
		// TODO remove border if open?
    }

	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
	}
	
	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out;
		color: $primary-text-color;
	}
	
	button {
		z-index: 20;
	}
	
	.open #left-a {
		transform: translate(10px, -3px) rotate(25deg)
	}
	
	.open #middle-slash {
		opacity: 0;
		transition: transform 0.5s ease-in-out;
	}
	
  	.open #right-a {
		transform: translate(-7px, 7px) rotate(-25deg)
	}

	:global(body.dark-mode)  {
        & .hamburger {
            color: $dark-text-color;
		}
		// & svg line {
		// 	color: $dark-text-color;
		// }
    }
</style>