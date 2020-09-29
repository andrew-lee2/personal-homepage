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
    let totalExpandHeight: string = '';

    export let projectDetailInfo: ProjectDetails;
    
    onMount(() => {
        expandHeight = `{description.scrollHeight + 5}px`;
        totalExpandHeight = `{description.scrollHeight + 25}px`;
        displayShowMore = (description.scrollHeight > description.clientHeight || showClicked);
    })
</script>

<div class="project-card" class:clicked="{showClicked === true}" style="--total-expand-height: {totalExpandHeight}">
    <ProjectHeader projectDetails={projectDetailInfo}/>
    <div class="project-details">
        <h6 class="description-header">Description</h6>
        <p bind:this={description} class:para-clicked="{showClicked === true}" style="--expand-height: {expandHeight}" class="description">
            {projectDetailInfo.description}
        </p>
        {#if displayShowMore}
            <ShowMoreButton bind:showClicked/>
        {/if}
        <div class="tag-container">
            {#each projectDetailInfo.tags as tag}
                <TechTag tag={tag}/>
            {/each}
        </div>
    </div>
</div>

<style type="text/scss">
    @import '../../styles/vars';

    .tag-container {
        margin-top: 0.5rem;
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

    .clicked {
        @media screen and (min-width: $small) {
            height: var(--total-expand-height) !important;
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
        width: 90%;
        margin-top: 1rem;
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
        justify-content: space-between;
        border-radius: 0 0 10px 10px;
        background-color: $primary-sidebar-background;
        padding: 1rem 1rem 0.5rem 1rem;
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