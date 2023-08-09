const body = document.body;

const themeBtn = document.getElementById("themeBtn");
const themeBtnIcon = document.querySelector("#themeBtn i");

function changeTheme() {
  if (themeBtnIcon.classList.contains("fa-sun")) {
    body.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
    themeBtnIcon.classList.replace("fa-sun", "fa-moon");
  } else {
    body.dataset.theme = "";
    localStorage.setItem("theme", "light");
    themeBtnIcon.classList.replace("fa-moon", "fa-sun");
  }
}

if (localStorage.getItem("theme") === "dark") {
  body.dataset.theme = "dark";
  themeBtnIcon.classList.replace("fa-sun", "fa-moon");
} else {
  body.dataset.theme = "";
  themeBtnIcon.classList.replace("fa-moon", "fa-sun");
}
