const settings = (function() {
  //=========================================================================
  // Using local settings or defaults, add settings buttons to sidebar
  function populateListenerOptions(options) {
    options.forEach(option => {
      const optionToggleButton = document.createElement("li");
      optionToggleButton.classList.add("toggleButton");
      optionToggleButton.innerHTML = option.name;
      optionToggleButton.dataset.type = option.type;

      if (option.isActive) {
        optionToggleButton.classList.add("active");
      }

      option.type === "event"
        ? document
            .getElementById("eventSettings")
            .appendChild(optionToggleButton)
        : document
            .getElementById("targetSettings")
            .appendChild(optionToggleButton);
    });

    return;
  }

  //=========================================================================
  // Based on inital settings, add listeners to all active targets and events // combinations
  function addActiveEventListenersToActiveTargets(targets, events) {
    targets.forEach(target => {
      if (target.isActive) {
        const eventTarget = handleEvent.getTargetDOMElementFromName(
          target.name
        );

        events.forEach(event => {
          if (event.isActive) {
            eventTarget.addEventListener(event.name, handleEvent.listener); //handle event from handleEvent.js
          }
        });
      }
    });
  }

  //=========================================================================
  let hideSettings = false;

  function toggleSettingsContainer(e) {
    const settingsContainer = document.querySelector(".settingsContainer");

    hideSettings = !hideSettings;

    hideSettings
      ? (settingsContainer.style.display = "none")
      : (settingsContainer.style.display = "block");
  }

  //=========================================================================
  function updateLocalStorage(optionToUpdate) {
    const eventOptions =
      JSON.parse(localStorage.getItem("eventSettings")) || getEventDefaults();
    const targetOptions =
      JSON.parse(localStorage.getItem("targetSettings")) || getTargetDefaults();

    const options =
      optionToUpdate.type === "event" ? eventOptions : targetOptions;

    const updatedToggleOption = Object.assign({}, optionToUpdate, {
      isActive: !optionToUpdate.isActive
    });

    const indexToUpdate = options.findIndex(option => {
      return optionToUpdate.name === option.name;
    });

    //copy event options to splice in new setting
    let newSettings = options.slice();

    //replace old setting with new, inactive setting
    newSettings.splice(indexToUpdate, 1, updatedToggleOption);

    const localStorageItem =
      optionToUpdate.type === "event" ? "eventSettings" : "targetSettings";

    localStorage.setItem(localStorageItem, JSON.stringify(newSettings));

    return;
  }

  //=========================================================================
  // Handle adding/removing listeners when user toggles option in settings
  function toggleListener(e) {
    const eventOptions =
      JSON.parse(localStorage.getItem("eventSettings")) ||
      settings.getEventDefaults();

    const targetOptions =
      JSON.parse(localStorage.getItem("targetSettings")) ||
      settings.getTargetDefaults();

    //make combined array of target and event options to find the info of option //that was clicked
    const toggleOptions = [...targetOptions, ...eventOptions];

    //get name and type of toggle option that was clicked
    const toggleOptionName = e.target.innerHTML;
    const toggleOptionType = e.target.dataset.type;

    //find the single option object for correct event or target that was //clicked/toggled
    const toggleOption = toggleOptions.find(option => {
      return (
        option.name === toggleOptionName && option.type === toggleOptionType
      );
    });

    //=============================
    // If active when clicked
    if (toggleOption.isActive) {
      //remove .active class
      e.target.classList.remove("active");

      //update localStorage settings
      updateLocalStorage(toggleOption);

      //remove listeners
      if (toggleOption.type === "event") {
        //remove event listeners from targets, based on type of thing toggled
        targetOptions.forEach(target => {
          if (target.isActive) {
            const eventTarget = handleEvent.getTargetDOMElementFromName(
              target.name
            );

            eventTarget.removeEventListener(
              toggleOption.name,
              handleEvent.listener
            );
          }
        });
      } else {
        //get DOM node to remove all listeners from it
        const eventTarget = handleEvent.getTargetDOMElementFromName(
          toggleOption.name
        );

        //remove listener from all events on target that was toggled off
        eventOptions.forEach(event => {
          if (event.isActive)
            eventTarget.removeEventListener(event.name, handleEvent.listener);
        });
      }
    }

    //=============================
    // If inactive when clicked
    if (!toggleOption.isActive) {
      //add .active class
      e.target.classList.add("active");

      //update localStorage settings
      updateLocalStorage(toggleOption);

      //add listeners
      if (toggleOption.type === "event") {
        //add event listeners to targets, based on type of thing toggled
        targetOptions.forEach(target => {
          if (target.isActive) {
            const eventTarget = handleEvent.getTargetDOMElementFromName(
              target.name
            );

            eventTarget.addEventListener(
              toggleOption.name,
              handleEvent.listener
            );
          }
        });
      } else {
        //get DOM node to add all listeners to it
        const eventTarget = handleEvent.getTargetDOMElementFromName(
          toggleOption.name
        );

        //add listener to all events on target that was toggled on
        eventOptions.forEach(event => {
          if (event.isActive)
            eventTarget.addEventListener(event.name, handleEvent.listener);
        });
      }
    }
  }

  //==========================================================================
  // Default Events
  function getEventDefaults() {
    const eventDefaults = [
      {
        name: "blur",
        isActive: false,
        type: "event"
      },
      {
        name: "change",
        isActive: false,
        type: "event"
      },
      {
        name: "click",
        isActive: false,
        type: "event"
      },
      {
        name: "contextmenu",
        isActive: false,
        type: "event"
      },
      {
        name: "DOMContentLoaded",
        isActive: true,
        type: "event"
      },
      {
        name: "dblclick",
        isActive: false,
        type: "event"
      },
      {
        name: "focus",
        isActive: false,
        type: "event"
      },
      {
        name: "focusin",
        isActive: false,
        type: "event"
      },
      {
        name: "focusout",
        isActive: false,
        type: "event"
      },
      {
        name: "input",
        isActive: false,
        type: "event"
      },
      {
        name: "keydown",
        isActive: false,
        type: "event"
      },
      {
        name: "keypress",
        isActive: false,
        type: "event"
      },
      {
        name: "keyup",
        isActive: false,
        type: "event"
      },
      {
        name: "load",
        isActive: false,
        type: "event"
      },
      {
        name: "mousedown",
        isActive: false,
        type: "event"
      },
      {
        name: "mouseenter",
        isActive: false,
        type: "event"
      },
      {
        name: "mouseleave",
        isActive: false,
        type: "event"
      },
      {
        name: "mousemove",
        isActive: false,
        type: "event"
      },
      {
        name: "mouseout",
        isActive: false,
        type: "event"
      },
      {
        name: "mouseover",
        isActive: false,
        type: "event"
      },
      {
        name: "mouseup",
        isActive: false,
        type: "event"
      },
      {
        name: "play",
        isActive: false,
        type: "event"
      },
      {
        name: "reset",
        isActive: false,
        type: "event"
      },
      {
        name: "scroll",
        isActive: false,
        type: "event"
      },
      {
        name: "seeked",
        isActive: false,
        type: "event"
      },
      {
        name: "seeking",
        isActive: false,
        type: "event"
      },
      {
        name: "select",
        isActive: false,
        type: "event"
      },
      {
        name: "storage",
        isActive: false,
        type: "event"
      },
      {
        name: "submit",
        isActive: false,
        type: "event"
      },
      {
        name: "timeupdate",
        isActive: false,
        type: "event"
      },
      {
        name: "volumechange",
        isActive: false,
        type: "event"
      }
    ];
    return eventDefaults;
  }

  //==========================================================================
  // Default Selectors

  function getTargetDefaults() {
    const targetDefaults = [
      {
        name: "window",
        isActive: true,
        type: "target"
      },
      {
        name: "document",
        isActive: false,
        type: "target"
      },
      {
        name: "body",
        isActive: false,
        type: "target"
      },
      {
        name: "main",
        isActive: false,
        type: "target"
      },
      {
        name: "h1",
        isActive: false,
        type: "target"
      },
      {
        name: "p",
        isActive: false,
        type: "target"
      },
      {
        name: "a",
        isActive: false,
        type: "target"
      },
      {
        name: "form",
        isActive: false,
        type: "target"
      },
      {
        name: "input",
        isActive: false,
        type: "target"
      },
      {
        name: "textarea",
        isActive: false,
        type: "target"
      },
      {
        name: "select",
        isActive: false,
        type: "target"
      },
      {
        name: "button",
        isActive: false,
        type: "target"
      },
      {
        name: "video",
        isActive: false,
        type: "target"
      },
      {
        name: "img",
        isActive: false,
        type: "target"
      }
    ];
    return targetDefaults;
  }

  //==========================================================================
  return {
    populateListenerOptions,
    addActiveEventListenersToActiveTargets,
    toggleSettingsContainer,
    updateLocalStorage,
    toggleListener,
    getEventDefaults,
    getTargetDefaults
  };
})();
