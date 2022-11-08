console.log(navigator.userAgent);
if (navigator.userAgent.includes("Chrome")) {
  console.log('Browser "Chrome"');
} else if (navigator.userAgent.includes("Firefox")) {
  console.log('Browser "Firefox"');
}
console.log(navigator.platform);
console.log(location.href);

function progressBar() {
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (scroll / height) * 100;
  document.getElementById("progress_bar").style.width = scrolled + "%";
}
window.addEventListener("scroll", progressBar);

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

let chatPopupOpen = document.querySelectorAll(".chat_block");
let chatPopupForm = document.querySelector(".chat_popup_form");
let closeChatButton = document.querySelector(".close_chat_window");
chatPopupOpen.forEach((chatButton) => {
  chatButton.addEventListener("click", () => {
    chatPopupForm.classList.toggle("active_chat_form");
  });
});
closeChatButton.addEventListener("click", () => {
  chatPopupForm.classList.remove("active_chat_form");
});

let aArray = Array.from(document.getElementsByTagName('a'));
aArray.forEach(element => {
  element.addEventListener("click", () => {
    chatPopupForm.classList.remove("active_chat_form");
  });
});

let helpNow = document.querySelectorAll(".help_now");
let helpNowBackground = document.querySelector(".help_now_background");
let helpNowWindow = document.querySelector(".help_now_popup");
helpNow.forEach((help) => {
  help.addEventListener("click", () => {
    helpNowBackground.classList.add("active_help_now_window");
    helpNowWindow.classList.add("active_help_now_window");
  });
});

document.addEventListener("click", (helpNowClick) => {
  if (helpNowClick.target === helpNowBackground) {
    helpNowBackground.classList.remove("active_help_now_window");
    helpNowWindow.classList.remove("active_help_now_window");
  }
});

document.addEventListener("click", (helpNowClose) => {
  if (helpNowClose.target === helpNowBackground) {
    helpNowBackground.classList.remove("active_help_now_window");
    helpNowWindow.classList.remove("active_help_now_window");
  }
});

let financeHelpWindow = document.querySelector(".finance_help_window");
let financeHelpButton = document.querySelectorAll(".finance_help");
let financeHelpButtonActivate = document.querySelector(".finance_help");
let financeHelpNowForms = document.querySelector(".finance_help_now_forms");
let financeHelpNowFormFirstBlock = document.querySelector(".help_now_form_first_block"),
financeHelpNowFormSecondBlock = document.querySelector(".help_now_form_second_block"),
financeHelpNowFormThirdBlock = document.querySelector(".help_now_form_third_block"),
financeHelpNowFormFourthBlock = document.querySelector(".help_now_form_fourth_block");
let persons = document.querySelector(".persons");
let personForms = document.querySelector(".person_forms");
let individualPersonButton = document.querySelector(".individual_person_button");
let legalPersonButton = document.querySelector(".legal_person_button");
let logoBankTransition = document.getElementById("logo_bank_transition"),
logoterminalsOfUkraine = document.getElementById("logo_terminals_of_Ukraine"),
logoWebMoney = document.getElementById("logo_WebMoney"),
logoPayPal = document.getElementById("logo_PayPal"),
logoPrivatbank = document.getElementById("logo_Privatbank"),
logoVisaMastercard = document.getElementById("logo_Visa_MasterCard");
financeHelpButton.forEach((financeHelpFormOpen) => {
  financeHelpFormOpen.addEventListener("click", () => {
    financeHelpWindow.classList.add("active_finance_help_window");
    helpNowWindow.classList.add("active_help_now_popup_scroll");
    persons.classList.add("active_persons");
    individualPersonButton.classList.add("active_individual_person_button");
    legalPersonButton.classList.remove("active_legal_person_button");
    financeHelpNowForms.classList.add("active_finance_help_now_forms");
    financeHelpNowFormThirdBlock.classList.remove("active_help_now_form_third_block");
    financeHelpNowFormFourthBlock.classList.remove("active_help_now_form_fourth_block");
    logoBankTransition.classList.add("remove_logo_bank_transition");
    financeHelpButtonActivate.classList.add("active_finance_help");
    financeHelpButton2.classList.add("active_finance_help_2");
    helpNowFaArrowFinanceHelp.classList.add("active_fa-arrow-finance-help");
    creditCardDataBlock.classList.add("active_credit_card_data_block");
    logoPrivatbank.classList.add("active_logo_Privatbank");
  });
});

persons.addEventListener("click", (openForm) => {
  if (openForm.target === individualPersonButton) {
    persons.classList.add("active_persons");
    individualPersonButton.classList.add("active_individual_person_button");
    legalPersonButton.classList.remove("active_legal_person_button");
    financeHelpNowForms.classList.add("active_finance_help_now_forms");
    financeHelpNowFormThirdBlock.classList.remove("active_help_now_form_third_block");
    financeHelpNowFormFourthBlock.classList.remove("active_help_now_form_fourth_block");
    logoBankTransition.classList.add("remove_logo_bank_transition");
  }
  if (openForm.target === legalPersonButton) {
    persons.classList.add("active_persons");
    legalPersonButton.classList.add("active_legal_person_button");
    individualPersonButton.classList.remove("active_individual_person_button");
    financeHelpNowForms.classList.add("active_finance_help_now_forms");
    financeHelpNowFormThirdBlock.classList.add("active_help_now_form_third_block");
    financeHelpNowFormFourthBlock.classList.add("active_help_now_form_fourth_block");
    logoBankTransition.classList.remove("remove_logo_bank_transition");
  }
});

let creditCardDataBlock = document.querySelector(".credit_card_data_block");
logoPrivatbank.addEventListener("click", (logoPrivatBankActive) => {
  if (logoPrivatBankActive.target = logoPrivatbank)
    creditCardDataBlock.classList.add("active_credit_card_data_block");
    logoPrivatbank.classList.add("active_logo_Privatbank");
});

let doHelpButton2 = document.querySelector(".do_help_2"),
financeHelpButton2 = document.querySelector(".finance_help_2"),
materialHelpButton2 = document.querySelector(".material_help_2"),
volunteeringHelpButton2 = document.querySelector(".volunteering_help_2");
let helpNowFaArrowDoHelp = document.querySelector(".fa-arrow-do-help"),
helpNowFaArrowFinanceHelp = document.querySelector(".fa-arrow-finance-help"),
helpNowFaArrowMaterialHelp = document.querySelector(".fa-arrow-material-help"),
helpNowFaArrowVolunteeringHelp = document.querySelector(".fa-arrow-volunteering-help");
financeHelpButtonActivate.addEventListener("click", (financeHelpButtonColorChange) => {
  if (financeHelpButtonColorChange.target === financeHelpButtonActivate) {
    financeHelpButtonActivate.classList.add("active_finance_help");
    financeHelpButton2.classList.add("active_finance_help_2");
    helpNowFaArrowFinanceHelp.classList.add("active_fa-arrow-finance-help");
  }  
  if (financeHelpButtonColorChange.target === helpNowWindow) {
    financeHelpButtonActivate.classList.remove("active_finance_help");
    financeHelpButton2.classList.remove("active_finance_help_2");
    helpNowFaArrowFinanceHelp.classList.remove("active_fa-arrow-finance-help");
  }
  if (financeHelpButtonColorChange.target === helpNowBackground) {
    financeHelpButtonActivate.classList.remove("active_finance_help");
    financeHelpButton2.classList.remove("active_finance_help_2");
    helpNowFaArrowFinanceHelp.classList.remove("active_fa-arrow-finance-help");
  }
});

document.addEventListener("click", (financeHelpFormClose) => {
  if (financeHelpFormClose.target === helpNowWindow) {
    financeHelpWindow.classList.remove("active_finance_help_window");
    helpNowWindow.classList.remove("active_help_now_popup_scroll");
  }
  if (financeHelpFormClose.target === helpNowBackground) {
    financeHelpWindow.classList.remove("active_finance_help_window");
    helpNowWindow.classList.remove("active_help_now_popup_scroll");
  }
});

let files = document.getElementById("add_logo_file");
files.addEventListener('change', function() {
  let arrayFiles = this.files,
      formItem = this.parentNode,
      listFiles = document.createElement('p'),
      li = '';
  if (formItem.querySelector('.help_now_logo_file')) {
    formItem.querySelector('.help_now_logo_file').remove();
  }
  listFiles.className = 'help_now_logo_file';
  for (let i = 0; i < arrayFiles.length; i++) {
    li +=  arrayFiles[i].name;
  }
  listFiles.innerHTML = li;
  formItem.appendChild(listFiles);  
});