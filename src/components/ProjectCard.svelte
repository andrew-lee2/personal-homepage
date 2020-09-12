<script lang="ts">
    import { onMount } from 'svelte';
    import ExpandArrow from '../components/ExpandArrow.svelte';
    import CollapseArrow from '../components/CollapseArrow.svelte';
    import ShowMoreButton from '../components/ShowMoreButton.svelte';
    let description: any;
    let showClicked: boolean = false;
    let displayShowMore: boolean = true;

    // TODO centralize interface
    interface ProjectDetails {
        name: string;
        URL: string;
        description: string;
        tags: string[];
    }

    export let projectDetails: ProjectDetails;

    onMount(() => {
        // TODO can we make this more dynamic with the length of what needs to be exposed
        displayShowMore = (description.scrollHeight > description.clientHeight || showClicked);
    })
</script>

<div class="project-card" class:clicked="{showClicked === true}">
    <!-- TODO make this a component? -->
    <div class="project-name-section">
        <h6 class="project-header">Project</h6>
        <!-- TODO make this a var -->
        <div class="title-link-container">
            <h2 class="project-name">{projectDetails.name}</h2>
            <!-- TODO make href a var -->
            <!-- svelte-ignore a11y-missing-content -->
            <a class="icon-github" href="{projectDetails.URL}" target="_blank"></a>
        </div>
    </div>
    <div class="project-details">
        <h6 class="description-header">Description</h6>
        <p bind:this={description} class:para-clicked="{showClicked === true}" class="description">
            {projectDetails.description}
        </p>
        {#if displayShowMore}
            <ShowMoreButton bind:showClicked></ShowMoreButton>
        {/if}
        <div class="tag-container">
            <!-- TODO make this a component -->
            {#each projectDetails.tags as tag}
                <span class="tech-tag">{tag}</span>
            {/each}
        </div>
    </div>
</div>

<style type="text/scss">
    @import '../styles/vars';

    // svg line {
	// 	stroke: $primary-text-color;
	// 	stroke-width: 2;
	// 	transition: $standard-transition;
	// 	color: $primary-text-color;
	// }
    .tag-container {
        display: block;
    }

    .tech-tag {
        border-radius: 9999px;
        background-color: $primary-base;
        font-weight: 600;
        padding: 0.5rem 4% 0.5rem 4%;
        display: inline-block;
        margin-right: 0.5rem;
    }

    h6 {
        margin-top: 0;
        margin-bottom: .5rem;
        color: $primary-text-color;
        &.project-header {
            color: $dark-text-color;
        }
    }

    h2 {
        margin-top: 0;
        margin-bottom: 0;
        color: $dark-text-color;
    }

    p {
        margin: 0;
    }

    .title-link-container {
        display: flex;
        align-items: flex-end;
        @media screen and (min-width: $small){
            flex-direction: column;
            align-items: flex-start;
            height: 100%;
        }
    }

    .icon-github {
        width: 25px;
        height: 25px;
        filter: $dark-text-filter;
        // TODO something wierd going on
        z-index: 0;
        background-image: url(../static/images/github.svg);
        &:hover {
            filter: $dark-text-hover-filter;
        }

        @media screen and (min-width: $small) {
            margin-top: auto;
        }
    }

    .clicked {
        height: 350px !important;
        @media screen and (min-width: $small) {
            height: 255px !important;
        }
    }

    .para-clicked {
        height: 145px !important;
    }

    .description {
        height: 45px;
        overflow: hidden;
        @media screen and (min-width: $small) {
            height: 125px;
        }
    }

    .project-card {
        margin: 1rem 1rem 0 1rem;
        display: flex;
        flex-direction: column;
        @media screen and (min-width: $small) {
            flex-direction: row;
            min-width: 300px;
            height: 175px;
        }
    }

    .project-name-section {
        border-radius: 10px 10px 0 0;
        display: flex;
        flex-direction: column;
        background-color: $primary-highlight;
        padding: 1rem;
        
        @media screen and (min-width: $small) {
            min-width: 150px;
            border-radius: 10px 0 0 10px;
        }
    }

    .project-details {
        display: flex;
        flex-direction: column;
        border-radius: 0 0 10px 10px;
        background-color: $primary-sidebar-background;
        padding: 1rem;
        @media screen and (min-width: $small) {
            border-radius: 0 10px 10px 0;
        }
    }

    :global(body.dark-mode) {
        .project-details {
            background-color: $dark-card-description;
        }
        .project-name-section {
            background-color: $dark-card-project;
        }
        button {
            color: $dark-text-color;
            background-color: $dark-card-description;
        }
        // svg {
        //     filter: $dark-text-filter;
        // }
        h6, p {
            color: $dark-text-color;
        }
    }
</style>