<script>
    let hovering;
    let clazz;
    export {clazz as class};

    function enter() {
        hovering = true;
    }

    function leave() {
        hovering = false;
    }
</script>

<div class="{`${clazz || ''}`}" on:mouseenter={enter} on:mouseleave={leave}>
    <slot hovering={hovering}></slot>
</div>

<style>
    .display-front {
        z-index: 20;
    }

	.hamburger-container {
		width: 3.5rem;
	}
</style>