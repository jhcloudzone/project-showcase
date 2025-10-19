document.addEventListener('DOMContentLoaded', () => {
    fetch('data/projects.json')
        .then(response => response.json())
        .then(data => {
            const projectContainer = document.getElementById('project-container');
            data.projects.forEach(project => {
                const projectCard = createProjectCard(project);
                projectContainer.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Error loading project data:', error));
});

function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('project-card');

    const title = document.createElement('h3');
    title.textContent = project.title;
    card.appendChild(title);

    const description = document.createElement('p');
    description.textContent = project.description;
    card.appendChild(description);

    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.title;
    card.appendChild(image);

    const link = document.createElement('a');
    link.href = project.link;
    link.textContent = 'View Project';
    card.appendChild(link);

    return card;
}