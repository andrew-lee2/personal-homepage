<script>
    import { onMount } from 'svelte';
    let description;
    let showClicked = false;
    let displayShowMore = true;

    onMount(() => {
        displayShowMore = description.scrollHeight > description.clientHeight;
    })

    function handleClick() {
        showClicked = !showClicked;
    }
</script>

<div class="project-card" class:clicked="{showClicked === true}">
    <div class="project-name-section">
        <h6 class="project-header">Project</h6>
        <!-- TODO make this a var -->
        <h2 class="project-name">Resveration Framework</h2>
        <!-- TODO make href a var -->
        <!-- svelte-ignore a11y-missing-content -->
        <a class="icon-github" href="https://github.com/andrew-lee2/"></a>
    </div>
    <div class="project-details">
        <h6 class="description-header">Description</h6>
        <p bind:this={description} class="description">this is a random sentence.this is a randthis is a random sentence.this is a randthis is a random sentence.this is a randthis is a random sentence.this is a randthis is a random sentence.this is a rand.this is a random sentence.this is a random sentence.this is a random sentence.</p>
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
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="24 / arrows / chevron-bottom">
                            <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M2.35358 8.35352L1.64647 7.64641L6.00002 3.29285L10.3536 7.64641L9.64647 8.35352L6.00002 4.70707L2.35358 8.35352Z" fill="black"/>
                        </g>
                    </svg>
                {:else}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="24 / arrows / chevron-bottom">
                            <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M9.64642 3.64648L10.3535 4.35359L5.99998 8.70715L1.64642 4.35359L2.35353 3.64648L5.99998 7.29293L9.64642 3.64648Z" fill="black"/>
                        </g>
                    </svg>
                {/if}
            </div>
            
        {/if}
        <div class="tag-container">
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
        // padding: 0.75rem;
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

    .icon-github {
        margin-top: auto;
        display: inline-block;
        width: 25px;
        height: 25px;
        background-size: cover;
        filter: $dark-text-filter;
        z-index: 0;
        background-image: url(../static/images/github.svg);
        &:hover {
            filter: $dark-text-hover-filter;
        }
    }

    .clicked {
        // TODO might need to make this larger
        height: 225px !important;
    }

    .description {
        // TODO will need to adjust this
        height: 125px;
        overflow: hidden;
    }

    .project-card {
        margin: 1rem;
        min-width: 300px;
        height: 175px;
        display: flex; 
    }

    .project-name-section {
        border-radius: 10px 0 0 10px;
        display: flex;
        flex-direction: column;
        background-color: $primary-highlight;
        // TODO need to change this
        min-width: 150px;
        padding: 1rem;
    }

    .project-details {
        display: flex;
        flex-direction: column;
        border-radius: 0 10px 10px 0;
        background-color: $primary-sidebar-background;
        width: 100%;
        padding: 1rem;
    }
</style>