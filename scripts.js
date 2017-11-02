//=== Populate localStorage with above defaults if empty ===//
if (!localStorage.getItem("eventSettings")) {
  const eventDefaults = defaultSettings.getEventDefaults();
  localStorage.setItem("eventSettings", JSON.stringify(eventDefaults));
}

if (!localStorage.getItem("targetSettings")) {
  const targetDefaults = defaultSettings.getTargetDefaults();
  localStorage.setItem("targetSettings", JSON.stringify(targetDefaults));
}

//=========populate event/target filters with toggle buttons ==========//
const eventOptions = getLocalEventSettings();
const targetOptions = getLocalTargetSettings();

populateListenerFilters(eventOptions, "event");
populateListenerFilters(targetOptions, "target");

//====== Add listeners at initial page load if active =====//
targetOptions.forEach(target => {
  if (target.isActive) {
    let eventTarget;
    switch (target.name) {
      case "window":
        eventTarget = window;
        break;
      case "document":
        eventTarget = document;
        break;
      default:
        eventTarget = document.querySelector(target.name);
    }

    eventOptions.forEach(event => {
      if (event.isActive) {
        eventTarget.addEventListener(event.name, handleEvent);
      }
    });
  }
});

//=========== HANDLE EVENTS ===========//
let eventLog = document.getElementById("eventLog"),
  prevEvent = {},
  eventRepeatCounter = 1;

function handleEvent(e) {
  //we only care about the event target, and want to avoid duplicate actions
  //when bubbling up. Since everything has listener, bubbles to itself
  e.stopPropagation();

  //prevent page reload on form submission
  if (e.target.tagName == "FORM") {
    e.preventDefault();
  }

  //log event object for user reference
  console.log(e);

  //specify the label for the event target with currentTarget, so inactive targets don't show up when they are the event target
  let eventTarget = e.currentTarget,
    targetLabel = "";

  if (eventTarget === document) {
    targetLabel = "document";
  } else if (eventTarget === window) {
    targetLabel = "window";
  } else {
    targetLabel = `&lt;${eventTarget.tagName.toLowerCase()}&gt;`;
  }

  if (prevEvent.eventType == e.type && prevEvent.targetLabel == targetLabel) {
    //get the list item most recently appended, b/c it is same as current event
    let mostRecentEventItem = document.querySelector("#eventLog > li");
    //console.log(mostRecentEventItem);

    eventRepeatCounter += 1;
    mostRecentEventItem.classList.remove("eventItemColorFlash");

    let eventCounterLabel = mostRecentEventItem.querySelector("span");

    eventCounterLabel.style.display = "inline";
    eventCounterLabel.innerHTML = eventRepeatCounter;

    mostRecentEventItem.classList.add("eventItemColorFlash");
  } else {
    let newEvent = document.createElement("li");

    newEvent.innerHTML = `<a href='https://developer.mozilla.org/en-US/docs/Web/Events/${e.type}' target="_blank"> ${e.type}</a> <span class="eventCounterLabel"></span> 
          <code class="codeLabel">${targetLabel}</code>
        `;

    eventLog.prepend(newEvent); // add styling to new event!!!
    newEvent.classList.add("eventItemColorFlash");

    //set most recent event after making checks
    prevEvent = {
      eventType: e.type,
      targetLabel: targetLabel
    };

    //reset event repeat tracker
    eventRepeatCounter = 1;
  }
}

//=========== Show/Hide Filters ===========//
let hideFilter = false;

function toggleFilterContainer(e) {
  const filterContainerToggle = document.querySelector(".filterContainer");

  hideFilter = !hideFilter;

  if (hideFilter) {
    filterContainerToggle.style.display = "none";
  } else {
    filterContainerToggle.style.display = "block";
  }
}

document
  .getElementById("filterContainerToggle")
  .addEventListener("click", toggleFilterContainer);

//========= Toggle Listeners ==========//
const toggleButtons = document.querySelectorAll(".filterSection li");

toggleButtons.forEach(button => {
  button.addEventListener("click", toggleListener);
});

function toggleListener(e) {
  let targetName = e.target.innerHTML;
  let toggleOptions = [...targets, ...events];

  let targetInfo = toggleOptions.find(option => {
    return option.name === targetName;
  });

  // targetInfo.active ?

  // targetInfo.active = !targetInfo.active
}

//========= HELPER FUNCTIONS ==========//

function getLocalEventSettings() {
  return JSON.parse(localStorage.getItem("eventSettings"));
}

function getLocalTargetSettings() {
  return JSON.parse(localStorage.getItem("targetSettings"));
}

function populateListenerFilters(options, type) {
  options.forEach(option => {
    const optionToggleButton = document.createElement("li");
    optionToggleButton.classList.add("toggleButton");
    optionToggleButton.innerHTML = option.name;

    if (option.isActive) {
      optionToggleButton.classList.add("activeFilter");
    }

    type === "event"
      ? document.getElementById("eventFilters").appendChild(optionToggleButton)
      : document
          .getElementById("targetFilters")
          .appendChild(optionToggleButton);
  });

  return;
}
