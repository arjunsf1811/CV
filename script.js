document.addEventListener('DOMContentLoaded', function() {
    // Fetch JSON data
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        // Update Home section
        const homeSection = document.querySelector('#home');
        homeSection.querySelector('h1').textContent = data.home.title;
        homeSection.querySelector('p').textContent = data.home.description;
        
        // Update About section
        const aboutSection = document.querySelector('#about');
        aboutSection.querySelector('h2').textContent = data.about.title;
        aboutSection.querySelector('img').setAttribute('src', data.about.image);
        aboutSection.querySelector('p').textContent = data.about.description;
        
        // Update Projects section
        const projectsSection = document.querySelector('#projects');
        projectsSection.querySelector('h2').textContent = data.projects.title;
        
        const projectList = projectsSection.querySelector('.project-list');
        data.projects.projectList.forEach(project => {
          const projectDiv = document.createElement('div');
          projectDiv.classList.add('project');
          projectDiv.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          `;
          projectList.appendChild(projectDiv);
        });
        
        // Update Contact section
        const contactSection = document.querySelector('#contact');
        contactSection.querySelector('h2').textContent = data.contact.title;
        
        // Update Footer
        const footer = document.querySelector('footer');
        footer.querySelector('p').innerHTML = data.footer.text;
      })
      .catch(error => {
        console.error('Error fetching JSON data:', error);
      });
  });
  