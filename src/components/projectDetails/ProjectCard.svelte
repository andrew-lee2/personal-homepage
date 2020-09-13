<script lang="ts">
    import { onMount } from 'svelte';
    import ShowMoreButton from './ShowMoreButton.svelte';
    import TechTag from './TechTag.svelte';
    import ProjectHeader from './ProjectHeader.svelte';
    import type { ProjectDetails } from '../../common/types';
    let description: any;
    let showClicked: boolean = false;
    let displayShowMore: boolean = true;
    let expandHeight:string = '400px';

    export let projectDetails: ProjectDetails;
    
    onMount(() => {
        expandHeight = `{description.scrollHeight + 5}px`
        displayShowMore = (description.scrollHeight > description.clientHeight || showClicked);
    })
</script>

<div class="project-card" class:clicked="{showClicked === true}">
    <ProjectHeader projectDetails={projectDetails}/>
    <div class="project-details">
        <h6 class="description-header">Description</h6>
        <p bind:this={description} class:para-clicked="{showClicked === true}" style="--expand-height: {expandHeight}" class="description">
            {projectDetails.description}
        </p>
        {#if displayShowMore}
            <ShowMoreButton bind:showClicked/>
        {/if}
        <div class="tag-container">
            {#each projectDetails.tags as tag}
                <TechTag tag={tag}/>
            {/each}
        </div>
    </div>
</div>

<style type="text/scss">
    @import '../../styles/vars';

    .tag-container {
        display: block;
    }

    h6 {
        margin-top: 0;
        margin-bottom: .5rem;
        color: $primary-text-color;
    }

    p {
        margin: 0;
    }

    // TODO this isnt an issue now but can make it more dynamic like below
    .clicked {
        min-height: 350px !important;
        @media screen and (min-width: $small) {
            min-height: 255px !important;
        }
    }

    .para-clicked {
        height: var(--expand-height) !important;
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
        h6, p {
            color: $dark-text-color;
        }
    }
</style>