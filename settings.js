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
      settings.updateLocalStorage(toggleOption);

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
      settings.updateLocalStorage(toggleOption);

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
        isActive: true,
        type: "event"
      },
      {
        name: "change",
        isActive: true,
        type: "event"
      },
      {
        name: "click",
        isActive: true,
        type: "event"
      },
      {
        name: "contextmenu",
        isActive: true,
        type: "event"
      },
      {
        name: "DOMContentLoaded",
        isActive: true,
        type: "event"
      },
      {
        name: "dblclick",
        isActive: true,
        type: "event"
      },
      {
        name: "focus",
        isActive: true,
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
        isActive: true,
        type: "event"
      },
      {
        name: "keydown",
        isActive: false,
        type: "event"
      },
      {
        name: "keypress",
        isActive: true,
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
        isActive: true,
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
        isActive: true,
        type: "event"
      },
      {
        name: "play",
        isActive: true,
        type: "event"
      },
      {
        name: "reset",
        isActive: true,
        type: "event"
      },
      {
        name: "scroll",
        isActive: true,
        type: "event"
      },
      {
        name: "seeked",
        isActive: true,
        type: "event"
      },
      {
        name: "seeking",
        isActive: true,
        type: "event"
      },
      {
        name: "select",
        isActive: true,
        type: "event"
      },
      {
        name: "storage",
        isActive: true,
        type: "event"
      },
      {
        name: "submit",
        isActive: true,
        type: "event"
      },
      {
        name: "timeupdate",
        isActive: false,
        type: "event"
      },
      {
        name: "volumechange",
        isActive: true,
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
        isActive: false,
        type: "target"
      },
      {
        name: "document",
        isActive: false,
        type: "target"
      },
      {
        name: "main",
        isActive: true,
        type: "target"
      },
      {
        name: "h3",
        isActive: true,
        type: "target"
      },
      {
        name: "p",
        isActive: true,
        type: "target"
      },
      {
        name: "a",
        isActive: true,
        type: "target"
      },
      {
        name: "form",
        isActive: true,
        type: "target"
      },
      {
        name: "input",
        isActive: true,
        type: "target"
      },
      {
        name: "textarea",
        isActive: true,
        type: "target"
      },
      {
        name: "select",
        isActive: true,
        type: "target"
      },
      {
        name: "button",
        isActive: true,
        type: "target"
      },
      {
        name: "video",
        isActive: true,
        type: "target"
      },
      {
        name: "img",
        isActive: true,
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
