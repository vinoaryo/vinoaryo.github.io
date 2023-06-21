const body = document.body;
const themeIcon = document.querySelector("#themeButton i");

function changeTitle(title) {
  document.title = "VTech - " + title;
}

function toggleSections(sectionName) {
  // Get all section elements
  const homeSection = document.querySelector(".home");
  const aboutSection = document.querySelector(".about");
  const contactSection = document.querySelector(".contact");

  // Hide all section elements
  homeSection.style.display = "none";
  aboutSection.style.display = "none";
  contactSection.style.display = "none";

  // Show the selected section element
  if (sectionName === "home") {
    homeSection.style.display = "block";
  } else if (sectionName === "about") {
    aboutSection.style.display = "block";
  } else if (sectionName === "contact") {
    contactSection.style.display = "block";
  }
}

if (body.dataset.theme === "light") {
  themeIcon.className = "fa fa-moon";
}

if (body.dataset.theme === "dark") {
  themeIcon.className = "fa fa-sun";
}

document.querySelector("#themeButton").addEventListener("click", () => {
  if (body.dataset.theme === "light") {
    body.dataset.theme = "dark";
    themeIcon.classList.replace("fa-moon", "fa-sun");
    // themeIcon.classList.remove = 'fa fa-sun'
    // themeIcon.classList.add = 'fa fa-moon'
  } else {
    body.dataset.theme = "light";
    themeIcon.classList.replace("fa-sun", "fa-moon");
    // themeIcon.classList.remove = 'fa fa-moon'
    // themeIcon.classList.add = 'fa fa-sun'
  }
});

// // Language href

// document.querySelector("#php").addEventListener('click', () => {
//   window.location.href = "https://www.php.net/";
// })
// document.querySelector("#laravel").addEventListener('click', () => {
//   window.location.href = "https://www.laravel.com/";
// })
// document.querySelector("#node").addEventListener('click', () => {
//   window.location.href = "https://www.nodejs.org/";
// })
// document.querySelector("#python").addEventListener('click', () => {
//   window.location.href = "https://www.python.org/";
// })
// document.querySelector("#html").addEventListener('click', () => {
//   window.location.href = "https://www.html.com/";
// })

// Splash Screen Logic

const splash = document.querySelector(".splash");

setTimeout(() => {
  splash.style.opacity = 0;
  setTimeout(() => {
    splash.style.display = "none";
  }, 1001);
}, 500);
