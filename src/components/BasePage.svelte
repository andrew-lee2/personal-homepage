<script lang="ts">
    import Navbar from '../components/Navbar.svelte';
	import Sidebar from '../components/Sidebar.svelte';

    let open: boolean = false;
</script>

<div class="fix-home">
    <Sidebar bind:open/>
    <Navbar bind:sidebar={open}/>
    
</div>

<style type="text/scss">
    @import '../styles/vars';
    // TODO look at using a different font-family?
    // TODO this should be temporary til we fix sidebar
    .fix-home {
        position: fixed;
        width: 100%;
        height: 100%;
    }
    main {
        height: 100%;
        width: 100%;
        background-color: $primary-base;
		transition: background-color 0.3s;
    }

	:global(body.dark-mode)  {
        & main {
		    background-color: $dark-base-dark-grey;
        }
	}
</style>
