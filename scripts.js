// Events
const events = [
  {
    eventName: "blur",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/blur",
    active: true,
    selectors: ["input", "select", "textarea"]
  },
  {
    eventName: "change",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/change",
    active: true,
    selectors: ["input", "select", "textarea"]
  },
  {
    eventName: "click",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/click",
    active: true,
    selectors: [
      "main",
      "h3",
      "p",
      "form",
      "input",
      "textarea",
      "select",
      "button",
      "video",
      "img"
    ]
  },
  {
    eventName: "contextmenu",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/contextmenu",
    active: true,
    selectors: ["main"]
  },
  {
    eventName: "DOMContentLoaded",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded",
    active: true,
    selectors: ["document"]
  },
  {
    eventName: "dblclick",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/dblclick",
    active: true,
    selectors: [
      "main",
      "h3",
      "p",
      "form",
      "input",
      "textarea",
      "select",
      "button",
      "video",
      "img"
    ]
  },
  {
    eventName: "focus",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/focus",
    active: true,
    selectors: [
      "main",
      "h3",
      "p",
      "form",
      "input",
      "textarea",
      "select",
      "button",
      "video",
      "img"
    ]
  },
  {
    eventName: "focusin",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/focusin",
    active: false,
    selectors: [
      "main",
      "h3",
      "p",
      "form",
      "input",
      "textarea",
      "select",
      "button",
      "video",
      "img"
    ]
  },
  {
    eventName: "focusout",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/focusout",
    active: false,
    selectors: [
      "main",
      "h3",
      "p",
      "form",
      "input",
      "textarea",
      "select",
      "button",
      "video",
      "img"
    ]
  },
  {
    eventName: "input",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/input",
    active: true,
    selectors: ["input", "select", "textarea"]
  },
  {
    eventName: "keydown",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/keydown",
    active: false,
    selectors: ["input", "select", "textarea", "window"]
  },
  {
    eventName: "keypress",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/keypress",
    active: true,
    selectors: ["input", "select", "textarea", "window"]
  },
  {
    eventName: "keyup",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/keyup",
    active: false,
    selectors: ["input", "select", "textarea", "window"]
  },
  {
    eventName: "load",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/load",
    active: false,
    selectors: ["video", "img"]
  },
  {
    eventName: "mousedown",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/mousedown",
    active: true,
    selectors: ["input", "select", "textarea", "main"]
  },
  {
    eventName: "mouseenter",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter",
    active: false,
    selectors: [
      "main",
      "h3",
      "p",
      "form",
      "input",
      "textarea",
      "select",
      "button",
      "video",
      "img"
    ]
  },
  {
    eventName: "mouseleave",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/mouseleave",
    active: false,
    selectors: [
      "main",
      "h3",
      "p",
      "form",
      "input",
      "textarea",
      "select",
      "button",
      "video",
      "img"
    ]
  },
  {
    eventName: "mousemove",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/mousemove",
    active: false,
    selectors: [
      "main",
      "h3",
      "p",
      "form",
      "input",
      "textarea",
      "select",
      "button",
      "video",
      "img"
    ]
  },
  {
    eventName: "mouseout",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/mouseout",
    active: false,
    selectors: [
      "main",
      "h3",
      "p",
      "form",
      "input",
      "textarea",
      "select",
      "button",
      "video",
      "img"
    ]
  },
  {
    eventName: "mouseover",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/mouseover",
    active: false,
    selectors: [
      "main",
      "h3",
      "p",
      "form",
      "input",
      "textarea",
      "select",
      "button",
      "video",
      "img"
    ]
  },
  {
    eventName: "mouseup",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/mouseup",
    active: true,
    selectors: [
      "main",
      "h3",
      "p",
      "form",
      "input",
      "textarea",
      "select",
      "button",
      "video",
      "img"
    ]
  },
  {
    eventName: "play",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/play",
    active: true,
    selectors: ["video"]
  },
  {
    eventName: "reset",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/reset",
    active: true,
    selectors: ["form"]
  },
  {
    eventName: "scroll",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/scroll",
    active: true,
    selectors: ["main"]
  },
  {
    eventName: "seeked",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/seeked",
    active: true,
    selectors: ["video"]
  },
  {
    eventName: "seeking",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/seeking",
    active: true,
    selectors: ["video"]
  },
  {
    eventName: "select",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/select",
    active: true,
    selectors: [
      "main",
      "h3",
      "p",
      "form",
      "input",
      "textarea",
      "select",
      "button",
      "video",
      "img"
    ]
  },
  {
    eventName: "storage",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/storage",
    active: true,
    selectors: ["window"]
  },
  {
    eventName: "submit",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/submit",
    active: true,
    selectors: ["form"]
  },
  {
    eventName: "timeupdate",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/timeupdate",
    active: false,
    selectors: ["video"]
  },
  {
    eventName: "volumechange",
    link: "https://developer.mozilla.org/en-US/docs/Web/Events/volumechange",
    active: true,
    selectors: ["video"]
  }
];

// Selectors
const selectors = [
  {
    name: "window",
    element: window,
    active: true
  },
  {
    name: "document",
    element: document,
    active: true
  },
  {
    name: "main",
    element: document.querySelector("main"),
    active: true
  },
  {
    name: "h3",
    element: document.querySelector("h3"),
    active: true
  },
  {
    name: "p",
    element: document.querySelector("p"),
    active: true
  },

  {
    name: "form",
    element: document.querySelector("form"),
    active: true
  },
  {
    name: "input",
    element: document.querySelector("input"),
    active: true
  },
  {
    name: "textarea",
    element: document.querySelector("textarea"),
    active: true
  },
  {
    name: "select",
    element: document.querySelector("select"),
    active: true
  },
  {
    name: "button",
    element: document.querySelector("button"),
    active: true
  },
  {
    name: "video",
    element: document.querySelector("video"),
    active: true
  },
  {
    name: "img",
    element: document.querySelector("img"),
    active: true
  }
];

//=========populate listener filters ==========//
const selectorFilter = document.getElementById("selectorFilters");
const eventFilter = document.getElementById("eventFilters");

events.forEach(event => {
  let eventToggle = document.createElement("li");
  eventToggle.classList.add("toggleButton");
  eventToggle.innerHTML = event.eventName;

  if (event.active) {
    eventToggle.classList.add("activeFilter");
  }

  eventFilter.appendChild(eventToggle);
});

selectors.forEach(selector => {
  let selectorToggle = document.createElement("li");
  selectorToggle.classList.add("toggleButton");
  selectorToggle.innerHTML = selector.name;

  if (selector.active) {
    selectorToggle.classList.add("activeFilter");
  }

  selectorFilter.appendChild(selectorToggle);
});

//====== Add active event listeners to active, appllicable selectors =====//
selectors.forEach(selector => {
  if (selector.active) {
    events.forEach(event => {
      if (event.active && event.selectors.includes(selector.name)) {
        selector.element.addEventListener(event.eventName, handleEvent);
      }
    });
  }
});

//=========== HANDLE EVENTS ===========//
let eventLog = document.getElementById("eventLog"),
  prevEvent = {},
  eventRepeatCounter = 1;

function handleEvent(e) {
  //prevent page reload on form submission
  if (e.target.tagName == "FORM") {
    e.preventDefault();
  }

  //log event object for user reference
  console.log(e);

  //specify the label for the event target
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
    console.log(mostRecentEventItem);

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
