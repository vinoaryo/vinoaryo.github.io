const body = document.body

function changeTitle(title) {
  document.title = "VTech - " + title;
}

function toggleSections(sectionName) {
  // Get all section elements
  const homeSection = document.querySelector('.home');
  const aboutSection = document.querySelector('.about');
  const contactSection = document.querySelector('.contact');

  // Hide all section elements
  homeSection.style.display = 'none';
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';

  // Show the selected section element
  if (sectionName === 'home') {
    homeSection.style.display = 'block';
  } else if (sectionName === 'about') {
    aboutSection.style.display = 'block';
  } else if (sectionName === 'contact') {
    contactSection.style.display = 'block';
  }
}

document.querySelector('#themeButton').addEventListener('click', () => {
  if (body.dataset.theme === "light"){
    body.dataset.theme = "dark";
  } else {
    body.dataset.theme = "light";
  }
})