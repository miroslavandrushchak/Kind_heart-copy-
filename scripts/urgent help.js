function progressBar() {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (scroll / height) * 100;
  
    document.getElementById("progress_bar").style.width = scrolled + "%";
  }
  window.addEventListener("scroll", progressBar);
  
let contentOpenButtonArray = Array.from(document.getElementsByClassName("content_open_button"));
let helpNowTitles = Array.from(document.getElementsByClassName("help_now_titles")),
helpNowTitlesActivation = document.querySelector(".help_now_titles");

let firstProjectHelpWays = document.querySelector(".first_project_help_ways");
let currentProjects = document.querySelector(".current_projects");
let firstProjectBlock = document.querySelector(".first_project");
let firstProjectTextBlock = document.querySelector(".first_project_text_block");
let firstProjectDescription = document.querySelector(".first_project_description");
let kidPhoto1 = document.querySelector(".kid_photo_1");

document.addEventListener("click", (openProjectBlock) => {
    if (openProjectBlock.target === contentOpenButtonArray[0]) {
      currentProjects.classList.add("active_current_projects");
      firstProjectHelpWays.classList.add("active_first_project_help_ways");
      firstProjectBlock.classList.add("active_first_project");
      firstProjectDescription.classList.add("active_first_project_description");
      kidPhoto1.classList.add("active_kid_photo_1");
      firstProjectTextBlock.classList.add("active_first_project_text_block");
    }
});

let aArray = Array.from(document.getElementsByTagName("a"));
aArray.forEach(element => {
  element.addEventListener("click", () => {
    currentProjects.classList.remove("active_current_projects");
    firstProjectHelpWays.classList.remove("active_first_project_help_ways");

    firstProjectBlock.classList.remove("active_first_project");
    firstProjectDescription.classList.remove("active_first_project_description");
    kidPhoto1.classList.remove("active_kid_photo_1");
    firstProjectTextBlock.classList.remove("active_first_project_text_block");
    });
});

let usersRegistration = document.querySelectorAll(".registration");
let registrationPopupBackground = document.querySelector(".registration_popup");
let registrationPopupForm = document.querySelector(".registration_popup_form");
let closeRegistrationWindow = document.querySelector(".close_registration_window");

usersRegistration.forEach((button) => {
  button.addEventListener("click", (registration) => {
    registrationPopupBackground.classList.add("active_registration_form");
    registrationPopupForm.classList.add("active_registration_form");
  });
});
closeRegistrationWindow.addEventListener("click", () => {
  registrationPopupBackground.classList.remove("active_registration_form");
  registrationPopupForm.classList.remove("active_registration_form");
});
document.addEventListener("click", (registration) => {
  if (registration.target === registrationPopupBackground) {
    registrationPopupBackground.classList.remove("active_registration_form");
    registrationPopupForm.classList.remove("active_registration_form");
  }
});

let usersLogin = document.querySelectorAll(".login");
let loginPopupBackground = document.querySelector(".login_popup");
let loginPopupForm = document.querySelector(".login_popup_form");
let closeLoginWindow = document.querySelector(".close_login_window");

usersLogin.forEach((loginButton) => {
  loginButton.addEventListener("click", (login) => {
    loginPopupBackground.classList.add("active_login_form");
    loginPopupForm.classList.add("active_login_form");
  });
});
closeLoginWindow.addEventListener("click", () => {
  loginPopupBackground.classList.remove("active_login_form");
  loginPopupForm.classList.remove("active_login_form");
});
document.addEventListener("click", (login) => {
  if (login.target === loginPopupBackground) {
    loginPopupBackground.classList.remove("active_login_form");
    loginPopupForm.classList.remove("active_login_form");
  }
});