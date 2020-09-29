import type { ProjectDetails } from '../../common/types';


export let allProjects: ProjectDetails[] = [
    {
        name: "Personal Website", 
        URL: "https://https://github.com/andrew-lee2/personal-homepage", 
        description: "My personal website. You are currently on the site!", 
        tags: ["TypeScript", "Svelte"], 
    },
    {
        name: "Resveration Framework", 
        URL: "https://github.com/andrew-lee2/reservation_template", 
        description: "A Django app I wrote which is a barebones project allowing someone to setup a workflow to run workflows using Celery and being scheduled through text messages with Twilio. I use a version of this project to automatically book some weekly things I want to reserve via Selenium.", 
        tags: ["Python", "Django", "Twilio", "Celery"], 
    },
    {
        name: "Standup Tracker", 
        URL: "https://github.com/andrew-lee2/standup", 
        description: "Hackathon project I wrote in order to track the time my team was spending to hold daily standup. Start and end times are triggered using Google Assistant and API endpoints are triggered via webhook through ITFFF. A simple dashboard for displaying standup metrics was created using React Vis.", 
        tags: ["Javascript", "React"], 
    },
    {
        name: "Tiltft", 
        URL: "https://github.com/andrew-lee2/tiltft", 
        description: "API provides statistics for how a player has performed recently in the League of Legends game Team Fight Tactics. App looks up a summoner name and game region then provides an analysis of how the player has performed in recent games.", 
        tags: ["Java", "Spring Boot", "React"], 
    },
]