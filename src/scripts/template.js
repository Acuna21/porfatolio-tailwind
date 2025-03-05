import { projects } from "./data.js"; 

const templateProjects = document.querySelector('[data-template="project-card"]');

const projectsUl = document.querySelector('#projects-list');

projects.forEach((project) => {
    const card = templateProjects.content.cloneNode(true);

    const image = card.querySelector('img');
    const title = card.querySelector('h4');
    const description = card.querySelectorAll('p')[0]; // Primer párrafo

    const tech = card.querySelector('.tech-list'); // Clase específica

    const link = card.querySelector('a');

    image.src = project.image.src;
    image.alt = project.image.alt;

    title.textContent = project.title;
    description.textContent = project.description;
    tech.insertAdjacentHTML("beforeend", project.tech); 

    link.href = project.link;

    console.log("aca")

    projectsUl.appendChild(card);
});