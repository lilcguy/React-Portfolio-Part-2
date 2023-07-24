//maps through

import React from 'react'

import Project from '../../components/Project';

const projects = [
    {
        title: "Eat Drink Be Merry",
        summary: "Developed as part of a team, this tool allows users to search for meal and drink recipes using a third party API. When they've found one they like, they can then save the ingredients of them into a shopping list.",
        technologies: "HTML, CSS, JavaScript, third party API",
        role: "Contributed to front end JavaScript and initial wireframe designer.",
        repo: "https://github.com/Wir3s/eat-drink-be-merry",
        screenshot: "eat-drink-screenshot.png"
    },
    {
        title: "My Animal List",
        summary: "Developed in a team, this site is a parody on the popular anime review site MyAnimeList. It features account creation and authentication, and the ability to create discourse on one's favorite animals by making posts that others can interact with.",
        technologies: "HTML, CSS, JavaScript, Handlebars.js, Express, SQL, Sequelize, Cloudinary",
        role: "Worked on the backend by creating models for the database and worked on the front end with Handlebars.js.",
        repo: "https://github.com/salenaoneill/my-animal-list",
        screenshot: "mal-screenshot.png"

    },
    {
        title: "Happy Camper",
        summary: 'Developed as part of a team, this application allows users to create accounts, utilize the National Parks API to search for parks and campgrounds in the United States by state and save them to their profiles.',
        technologies: "React, CSS, JavaScript, MongoDB, Express",
        role: "Frontend developer utilizing React and creating search functionality with the API.",
        repo: "https://github.com/CBshmear/big-ole-3",
        screenshot: "camper-screenshot.png",
        screenshot2: "camper-screenshot-2.png"

    },
    {
        title: "Social Network API",
        summary: "An API that would allow users to create accounts, create posts, create friendships with other users, and react to posts made by other users.",
        technologies: "Express, MongoDB, Mongoose, Insomnia",
        role: "Sole Author",
        repo: "https://github.com/lilcguy/Social-Network-API",
        demo: "https://drive.google.com/file/d/159CTmF05kQpWfFsdmMkUzRiQhuen7uFQ/view?usp=sharing"

    },
    {
        title: "Command Line Employee Tracker",
        summary: "A tool operated from the command line that would allow a company to interface with a database by creating departments, roles, and employees.",
        technologies: "Inquirer, SQL",
        role: "Sole Author",
        repo: "https://github.com/lilcguy/Employee-Tracker",
        demo: "https://drive.google.com/file/d/18sardReenpn6yWyrTfblt9SEYIn9xQ6y/view"

    },
]

export default function Portfolio () {
    return (
        <div>
            
            <Project projects={projects}></Project>
        </div>
    )
}