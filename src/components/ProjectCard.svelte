<script>
    import { onMount } from 'svelte';
    import ExpandArrow from '../../public/static/images/expand_arrow.svg';
    import CollapseArrow from '../../public/static/images/collapse_arrow.svg';
    let description;
    let showClicked = false;
    let displayShowMore = true;

    onMount(() => {
        displayShowMore = (description.scrollHeight > description.clientHeight || showClicked);
    })

    function handleClick() {
        showClicked = !showClicked;
    }
</script>

<div class="project-card" class:clicked="{showClicked === true}">
    <!-- TODO make this a component? -->
    <div class="project-name-section">
        <h6 class="project-header">Project</h6>
        <!-- TODO make this a var -->
        <div class="title-link-container">
            <h2 class="project-name">Resveration Framework</h2>
            <!-- TODO make href a var -->
            <!-- svelte-ignore a11y-missing-content -->
            <a class="icon-github" href="https://github.com/andrew-lee2/" target="_blank"></a>
        </div>
    </div>
    <div class="project-details">
        <h6 class="description-header">Description</h6>
        <p bind:this={description} class:para-clicked="{showClicked === true}" class="description">this is a random sentence.this is a randthis is a random sentence.this is a randthis is a random sentence.this is a randthis is a random sentence.this is a randthis is a random sentence.this is a rand.this is a random sentence.this is a random sentence.this is a random sentence.</p>
        <!-- TODO make this a component -->
        {#if displayShowMore}
            <div class="show-more-button">
                <button
                    on:click={handleClick}
                >
                    {#if showClicked}
                        Show Less
                    {:else}
                        Show More
                    {/if}
                </button>
                {#if showClicked}
                    <CollapseArrow/>
                {:else}
                    <ExpandArrow/>
                {/if}
            </div>
            
        {/if}
        <div class="tag-container">
            <!-- TODO make this a component -->
            <span class="tech-tag">Python</span>
            <span class="tech-tag">Django</span>
        </div>
    </div>
</div>

<style type="text/scss">
    @import '../styles/vars';

    .show-more-button {
        display: flex;
        align-items: center;
        margin-bottom: 0.25em;
    }
    svg line {
		stroke: currentColor;
		stroke-width: 2;
		transition: $standard-transition;
		color: $primary-text-color;
	}

    button {
        border: none;
        background-color: $primary-sidebar-background;
        font-size: 0.67em;
        font-weight: 600;
        text-align: left;
        padding-left: 0;
        cursor: pointer;
        display: flex;
        align-items: baseline;
        margin: 0;
    }


    .tag-container {
        display: block;
    }

    .tech-tag {
        border-radius: 9999px;
        background-color: #FFFFFF;
        font-weight: 600;
        padding: 0.5rem 4% 0.5rem 4%;
        display: inline-block;
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
        // TODO might need to make this larger
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
            // TODO need to change this
            min-width: 150px;
            border-radius: 10px 0 0 10px;
            // width: 100%;
        }
    }

    .project-details {
        display: flex;
        flex-direction: column;
        border-radius: 0 0 10px 10px;
        background-color: $primary-sidebar-background;
        padding: 1rem;
        @media screen and (min-width: $small) {
            // width: 100%;
            border-radius: 0 10px 10px 0;
        }
    }
</style>