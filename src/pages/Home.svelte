<script lang="ts">
    import BackgroundType from '../components/BackgroundType.svelte';
    import Hoverable from '../utils/Hoverable.svelte';
    import {clickOutside} from '../utils/clickOutside';
    import { fade, fly } from 'svelte/transition';
    import Navbar from '../components/Navbar.svelte';
</script>

<main>
    <Navbar/>

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
        grid-template-columns: 25px 33% auto auto 25px;
        grid-template-rows: 25% 25% 25% 25%;
    }
    .text-container {
        grid-area: 2 / 2 / 2 / 4;
    }

    @media (min-width: 640px) {
        main {
            grid-template-columns: 100px 100px auto auto 100px;
        }
        .text-container {
            grid-area: 2 / 3 / 4 / 4;
        }
    }
</style>