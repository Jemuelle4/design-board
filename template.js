function showNavBar(){
  document.addEventListener('DOMContentLoaded', () =>{
    const navbarTemplatePath = 'templates/navbar.html';

    fetch(navbarTemplatePath)
      .then(response => response.text())
      .then(templateContent =>{
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = templateContent;
        const template = tempDiv.querySelector('#navbar-template');

        const cloneTemplateContent = document.importNode(template.content, true);

        document.getElementById('navbar-container').appendChild(cloneTemplateContent);
      })
      .catch(error => console.error('Error loading the template:', error));
  })
}

showNavBar()