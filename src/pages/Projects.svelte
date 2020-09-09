<script lang="ts">
    import ProjectCard from '../components/ProjectCard.svelte';
    import SocialLinks from '../components/SocialLinks.svelte';
    // https://github.com/EmilTholin/svelte-routing/issues/122
    export let location: any;

    
    
</script>

<main>
    <div class="container">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <div class="footer">
            <SocialLinks></SocialLinks>
        </div>
    </div>
    
</main>

<style type="text/scss">
    @import '../styles/vars';
    .footer {
        margin: 4rem auto 4rem auto;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: column;
        width:100%;
        margin: 3rem auto 0 auto;

        @media screen and (min-width: $small){
            width: 30%;
            margin: 6rem auto 0 auto;
        }
    }

    main {
        background-color: $primary-base;
		transition: background-color 0.3s;
    }

    :global(body.dark-mode)  {
        & main {
		    background-color: $dark-base-dark-grey;
        }
    }
</style>