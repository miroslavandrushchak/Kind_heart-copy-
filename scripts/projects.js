function progressBar() {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (scroll / height) * 100;
  
    document.getElementById("progress_bar").style.width = scrolled + "%";
  }
  window.addEventListener("scroll", progressBar);

let currentProjects = document.querySelector(".current_projects");

let firstProjectBlock = document.querySelector(".first_project"),
secondProjectBlock = document.querySelector(".second_project"),
thirdProjectBlock = document.querySelector(".third_project"),
fourthProjectBlock = document.querySelector(".fourth_project");
  
let firstProjectTextBlock = document.querySelector(".first_project_text_block"),
secondProjectTextBlock = document.querySelector(".second_project_text_block"),
thirdProjectTextBlock = document.querySelector(".third_project_text_block"),
fourthProjectTextBlock = document.querySelector(".fourth_project_text_block");

let firstProjectDescription = document.querySelector(".first_project_description"),
secondProjectDescription = document.querySelector(".second_project_description"),
thirdProjectDescription = document.querySelector(".third_project_description"),
fourthProjectDescription = document.querySelector(".fourth_project_description");
  
let kidPhoto1 = document.querySelector(".kid_photo_1"),
kidPhoto2 = document.querySelector(".kid_photo_2"),
kidPhoto3 = document.querySelector(".kid_photo_3"),
kidPhoto4 = document.querySelector(".kid_photo_4");

  
let contentOpenButtonArray = Array.from(document.getElementsByClassName("content_open_button"));
let helpNowTitles = Array.from(document.getElementsByClassName("help_now_titles")),
helpNowTitlesActivation = document.querySelector(".help_now_titles");

let firstProjectHelpWays = document.querySelector(".first_project_help_ways"),
secondProjectHelpWays = document.querySelector(".second_project_help_ways"),
thirdProjectHelpWays = document.querySelector(".third_project_help_ways"),
fourthProjectHelpWays = document.querySelector(".fourth_project_help_ways");


document.addEventListener("click", (openProjectBlock) => {
    if (openProjectBlock.target === contentOpenButtonArray[0]) {
      currentProjects.classList.add("active_current_projects");
      firstProjectHelpWays.classList.add("active_first_project_help_ways");
      firstProjectBlock.classList.add("active_first_project");
      firstProjectDescription.classList.add("active_first_project_description");
      kidPhoto1.classList.add("active_kid_photo_1");
      firstProjectTextBlock.classList.add("active_first_project_text_block");

      secondProjectBlock.classList.remove("active_second_project");
      secondProjectDescription.classList.remove("active_second_project_description");
      kidPhoto2.classList.remove("active_kid_photo_2");
      secondProjectTextBlock.classList.remove("active_second_project_text_block");

      thirdProjectBlock.classList.remove("active_third_project");
      thirdProjectDescription.classList.remove("active_third_project_description");
      kidPhoto3.classList.remove("active_kid_photo_3");
      thirdProjectTextBlock.classList.remove("active_third_project_text_block");
      
      fourthProjectBlock.classList.remove("active_fourth_project");
      fourthProjectDescription.classList.remove("active_fourth_project_description");
      kidPhoto4.classList.remove("active_kid_photo_4");
      fourthProjectTextBlock.classList.remove("active_fourth_project_text_block"); 
    }
    if (openProjectBlock.target === contentOpenButtonArray[1]) {
        currentProjects.classList.add("active_current_projects");
        secondProjectHelpWays.classList.add("active_second_project_help_ways");
        secondProjectBlock.classList.add("active_second_project");
        secondProjectDescription.classList.add("active_second_project_description");
        kidPhoto2.classList.add("active_kid_photo_2");
        secondProjectTextBlock.classList.add("active_second_project_text_block");

        firstProjectBlock.classList.remove("active_first_project");
        firstProjectDescription.classList.remove("active_first_project_description");
        kidPhoto1.classList.remove("active_kid_photo_1");
        firstProjectTextBlock.classList.remove("active_first_project_text_block");

        thirdProjectBlock.classList.remove("active_third_project");
        thirdProjectDescription.classList.remove("active_third_project_description");
        kidPhoto3.classList.remove("active_kid_photo_3");
        thirdProjectTextBlock.classList.remove("active_third_project_text_block");

        fourthProjectBlock.classList.remove("active_fourth_project");
        fourthProjectDescription.classList.remove("active_fourth_project_description");
        kidPhoto4.classList.remove("active_kid_photo_4");
        fourthProjectTextBlock.classList.remove("active_fourth_project_text_block"); 
    }
    if (openProjectBlock.target === contentOpenButtonArray[2]) {
        currentProjects.classList.add("active_current_projects");
        thirdProjectHelpWays.classList.add("active_third_project_help_ways");
        thirdProjectBlock.classList.add("active_third_project");
        thirdProjectDescription.classList.add("active_third_project_description");
        kidPhoto3.classList.add("active_kid_photo_3");
        thirdProjectTextBlock.classList.add("active_third_project_text_block");

        firstProjectBlock.classList.remove("active_first_project");
        firstProjectDescription.classList.remove("active_first_project_description");
        kidPhoto1.classList.remove("active_kid_photo_1");
        firstProjectTextBlock.classList.remove("active_first_project_text_block");

        secondProjectBlock.classList.remove("active_second_project");
        secondProjectDescription.classList.remove("active_second_project_description");
        kidPhoto2.classList.remove("active_kid_photo_2");
        secondProjectTextBlock.classList.remove("active_second_project_text_block");

        fourthProjectBlock.classList.remove("active_fourth_project");
        fourthProjectDescription.classList.remove("active_fourth_project_description");
        kidPhoto4.classList.remove("active_kid_photo_4");
        fourthProjectTextBlock.classList.remove("active_fourth_project_text_block");
    }
    if (openProjectBlock.target === contentOpenButtonArray[3]) {
        currentProjects.classList.add("active_current_projects");
        fourthProjectHelpWays.classList.add("active_fourth_project_help_ways");
        fourthProjectBlock.classList.add("active_fourth_project");
        fourthProjectDescription.classList.add("active_fourth_project_description");
        kidPhoto4.classList.add("active_kid_photo_4");
        fourthProjectTextBlock.classList.add("active_fourth_project_text_block");

        firstProjectBlock.classList.remove("active_first_project");
        firstProjectDescription.classList.remove("active_first_project_description");
        kidPhoto1.classList.remove("active_kid_photo_1");
        firstProjectTextBlock.classList.remove("active_first_project_text_block");

        secondProjectBlock.classList.remove("active_second_project");
        secondProjectDescription.classList.remove("active_second_project_description");
        kidPhoto2.classList.remove("active_kid_photo_2");
        secondProjectTextBlock.classList.remove("active_second_project_text_block");

        thirdProjectBlock.classList.remove("active_third_project");
        thirdProjectDescription.classList.remove("active_third_project_description");
        kidPhoto3.classList.remove("active_kid_photo_3");
        thirdProjectTextBlock.classList.remove("active_third_project_text_block");
    }
});

let aArray = Array.from(document.getElementsByTagName("a"));
aArray.forEach(element => {
  element.addEventListener("click", () => {
    currentProjects.classList.remove("active_current_projects");
    firstProjectHelpWays.classList.remove("active_first_project_help_ways");
    secondProjectHelpWays.classList.remove("active_second_project_help_ways");
    thirdProjectHelpWays.classList.remove("active_third_project_help_ways");
    fourthProjectHelpWays.classList.remove("active_fourth_project_help_ways");

    firstProjectBlock.classList.remove("active_first_project");
    firstProjectDescription.classList.remove("active_first_project_description");
    kidPhoto1.classList.remove("active_kid_photo_1");
    firstProjectTextBlock.classList.remove("active_first_project_text_block");

    secondProjectBlock.classList.remove("active_second_project");
    secondProjectDescription.classList.remove("active_second_project_description");
    kidPhoto2.classList.remove("active_kid_photo_2");
    secondProjectTextBlock.classList.remove("active_second_project_text_block");

    thirdProjectBlock.classList.remove("active_third_project");
    thirdProjectDescription.classList.remove("active_third_project_description");
    kidPhoto3.classList.remove("active_kid_photo_3");
    thirdProjectTextBlock.classList.remove("active_third_project_text_block");

    fourthProjectBlock.classList.remove("active_fourth_project");
    fourthProjectDescription.classList.remove("active_fourth_project_description");
    kidPhoto4.classList.remove("active_kid_photo_4");
    fourthProjectTextBlock.classList.remove("active_fourth_project_text_block");  
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