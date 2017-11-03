//=== Populate localStorage with above defaults if empty ===//
if (!localStorage.getItem("eventSettings")) {
  const eventDefaults = settings.getEventDefaults();
  localStorage.setItem("eventSettings", JSON.stringify(eventDefaults));
}

if (!localStorage.getItem("targetSettings")) {
  const targetDefaults = settings.getTargetDefaults();
  localStorage.setItem("targetSettings", JSON.stringify(targetDefaults));
}

//====== populate event/target settingsContainer with toggle buttons ====//
const eventOptions =
  JSON.parse(localStorage.getItem("eventSettings")) ||
  settings.getEventDefaults();
const targetOptions =
  JSON.parse(localStorage.getItem("targetSettings")) ||
  settings.getTargetDefaults();

settings.populateListenerOptions([...eventOptions, ...targetOptions]);

//====== Add listeners at initial page load if target/event is active =====//
settings.addActiveEventListenersToActiveTargets(targetOptions, eventOptions);

//=========== Show/Hide Filters ===========//
document
  .getElementById("settingsContainerToggle")
  .addEventListener("click", settings.toggleSettingsContainer);

//========= Toggle Listeners ==========//
const toggleButtons = document.querySelectorAll(".settingsSection li");

toggleButtons.forEach(button => {
  button.addEventListener("click", settings.toggleListener);
});

//=========== Turn off form submission ===========//
const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
});

//change to make first commit

// document
//   .getElementById("settingsAllOn")
//   .addEventListener("click", turnAllOptionsOn);

// document
//   .getElementById("settingsAllOff")
//   .addEventListener("click", turnAllOptionsOff);

// function turnAllOptionsOn(e) {
//   const eventOptions = settings.getEventDefaults();
//   const targetOptions = settings.getTargetDefaults();

//   //add listeners
//   eventOptions.forEach(event => {
//     targetOptions.forEach(target => {
//       const eventTarget = handleEvent.getTargetDOMElementFromName(target.name);
//       eventTarget.addEventListener(event, handleEvent.listener);
//     });
//   });

//   //update class
//   const allOptions = document.querySelectorAll(".settingsContainer li");

//   allOptions.forEach(option => {
//     option.classList.add("active");
//   });

//   //updateLocalStorage
//   const updatedEventSettings = eventOptions.map(option => {
//     option.isActive = true;
//     return option;
//   });

//   const updatedTargetSettings = targetOptions.map(option => {
//     option.isActive = true;
//     return option;
//   });

//   localStorage.setItem("eventSettings", JSON.stringify(updatedEventSettings));
//   localStorage.setItem("targetSettings", JSON.stringify(updatedTargetSettings));

//   return;
// }

// function turnAllOptionsOff(e) {
//   const eventOptions = settings.getEventDefaults();
//   const targetOptions = settings.getTargetDefaults();

//   //add listeners
//   eventOptions.forEach(event => {
//     targetOptions.forEach(target => {
//       const eventTarget = handleEvent.getTargetDOMElementFromName(target.name);
//       eventTarget.removeEventListener(event, handleEvent.listener);
//     });
//   });

//   //update class
//   const allOptions = document.querySelectorAll(".settingsContainer li");

//   allOptions.forEach(option => {
//     option.classList.remove("active");
//   });

//   //updateLocalStorage
//   const updatedEventSettings = eventOptions.map(option => {
//     option.isActive = false;
//     return option;
//   });

//   const updatedTargetSettings = targetOptions.map(option => {
//     option.isActive = false;
//     return option;
//   });

//   localStorage.setItem("eventSettings", JSON.stringify(updatedEventSettings));
//   localStorage.setItem("targetSettings", JSON.stringify(updatedTargetSettings));

//   return;
// }
