<script>
	export let open = false
</script>

<button class="hamburger" class:open on:click={() => open = !open}>
	<svg width=24 height=24>
		<line id="left-a" x1=12 y1=2 x2=5 y2=22/>
		<line id="middle-slash" x1=7 y1=15 x2=17 y2=15/>
		<line id="right-a" x1=12 y1=2 x2=19 y2=22/>
	</svg>
</button>

<style type="text/scss">
    .hamburger {
        color: #a0aec0;
        cursor: pointer;
        margin-right: 1rem;
		margin-bottom: 0;
        border-style: none;
		display: flex;
		align-items: center;

        &:hover {
            color: #4a5568;
        }
        &:focus {
            outline: 0;
        }
    }

	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
	}
	
	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out
	}
	
	button {
		z-index: 20;
	}
	
	.open #left-a {
		transform: translate(10px, -3px) rotate(25deg)
	}
	
	.open #middle-slash {
		opacity: 0;
	}
	
  	.open #right-a {
		transform: translate(-7px, 7px) rotate(-25deg)
	}
</style>