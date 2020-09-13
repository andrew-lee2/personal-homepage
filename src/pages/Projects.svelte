<script lang="ts">
    import ProjectCard from '../components/projectDetails/ProjectCard.svelte';
    import SocialLinks from '../components/SocialLinks.svelte';
    import type { ProjectDetails } from '../common/types';

    // https://github.com/EmilTholin/svelte-routing/issues/122
    export let location: any;

    let allProjects: ProjectDetails[] = [
        {
            name: "Resveration Framework", 
            URL: "https://https://github.com/andrew-lee2/personal-homepage", 
            description: "Code for the website you are currently on!", 
            tags: ["TypeScript", "Svelte"], 
        },
        {
            name: "Standup Tracker", 
            URL: "https://github.com/andrew-lee2/standup", 
            description: "Google Home integration which writes to database and metrics are displayed with React graphs asdasdasdasdasdasdasdnasldhjasldhasdhas", 
            tags: ["Javascript", "React", "Google Home", "Test tag 2", "Test tag 3"], 
        },
    ]
    
</script>

<main>
    <div class="container">
        {#each allProjects as project}
            <ProjectCard projectDetails={project}/>
        {/each}
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