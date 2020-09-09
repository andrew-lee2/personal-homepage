<script lang="ts">
import type { each } from 'svelte/internal';
    import ProjectCard from '../components/ProjectCard.svelte';
    import SocialLinks from '../components/SocialLinks.svelte';
    // https://github.com/EmilTholin/svelte-routing/issues/122
    export let location: any;

    // TODO should we split this out into its own file? 
    interface ProjectDetails {
        name: string;
        URL: string;
        description: string;
        tags: string[];
    }
    
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
            description: "Google Home integration which writes to database and metrics are displayed with React graphs", 
            tags: ["Javascript", "React", "Google Home"], 
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