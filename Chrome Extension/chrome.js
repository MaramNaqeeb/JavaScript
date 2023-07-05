let savedLeads = [];
const inputLead = document.getElementById("input-save");
const buttonSave = document.getElementById("button-save");
const ButtonCurrrent = document.getElementById("button-current");
const ButtonDelete = document.getElementById("button-delete");
const ulButton = document.getElementById("ul-button");

const leadsFromLS = JSON.parse(localStorage.getItem("savedLeads"));
if (leadsFromLS) {
  savedLeads = leadsFromLS;
  Rendered(savedLeads);
}

buttonSave.addEventListener("click", function () {
  savedLeads.push(inputLead.value);
  inputLead.value = "";
  localStorage.setItem("savedLeads", JSON.stringify(savedLeads));
  Rendered(savedLeads);
});

ButtonCurrrent.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    savedLeads.push(tabs[0].url);
    localStorage.setItem("savedLeads", JSON.stringify(savedLeads));
    Rendered(savedLeads);
  });
});

ButtonDelete.addEventListener("dblclick", function () {
  localStorage.clear();
  savedLeads = [];
  Rendered(savedLeads);
});

function Rendered(anylead) {
  let items = "";
  for (let i = 0; i < anylead.length; i++) {
    items += `<li> 
    <a target='_blank' href='${anylead[i]}'>${anylead[i]}</a></li>`;
  }
  ulButton.innerHTML = items;
}
