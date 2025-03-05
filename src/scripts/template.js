import { projects, review } from "./data.js"; 

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

    projectsUl.appendChild(card);
});


const templateReview = document.querySelector('[data-template="review-card"]');
const reviewUl = document.querySelector('#review-list');

review.forEach((review) => {
    const reviewCard = templateReview.content.cloneNode(true);

    const image = reviewCard.querySelector('img');
    const name = reviewCard.querySelector('p');
    const reviewText = reviewCard.querySelector('blockquote');

    image.src = review.image.img;
    image.alt = review.image.alt;
    name.textContent = review.name;
    reviewText.textContent = review.review;

    reviewUl.appendChild(reviewCard);
})