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
