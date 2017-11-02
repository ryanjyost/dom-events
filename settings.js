const settings = (function() {
  //=========================================================================
  // Using local settings or defaults, add filter toggle buttons to sidebar
  function populateListenerOptions(options, type) {
    options.forEach(option => {
      const optionToggleButton = document.createElement("li");
      optionToggleButton.classList.add("toggleButton");
      optionToggleButton.innerHTML = option.name;

      if (option.isActive) {
        optionToggleButton.classList.add("activeFilter");
      }

      type === "event"
        ? document
            .getElementById("eventFilters")
            .appendChild(optionToggleButton)
        : document
            .getElementById("targetFilters")
            .appendChild(optionToggleButton);
    });

    return;
  }

  //=========================================================================
  // Based on inital settings, add listeners to all active targets and events // combinations

  //==========================================================================
  // Default Events
  function getEventDefaults() {
    const eventDefaults = [
      {
        name: "blur",
        isActive: true
      },
      {
        name: "change",
        isActive: true
      },
      {
        name: "click",
        isActive: true
      },
      {
        name: "contextmenu",
        isActive: true
      },
      {
        name: "DOMContentLoaded",
        isActive: true
      },
      {
        name: "dblclick",
        isActive: true
      },
      {
        name: "focus",
        isActive: true
      },
      {
        name: "focusin",
        isActive: false
      },
      {
        name: "focusout",
        isActive: false
      },
      {
        name: "input",
        isActive: true
      },
      {
        name: "keydown",
        isActive: false
      },
      {
        name: "keypress",
        isActive: true
      },
      {
        name: "keyup",
        isActive: false
      },
      {
        name: "load",
        isActive: false
      },
      {
        name: "mousedown",
        isActive: true
      },
      {
        name: "mouseenter",
        isActive: false
      },
      {
        name: "mouseleave",
        isActive: false
      },
      {
        name: "mousemove",
        isActive: false
      },
      {
        name: "mouseout",
        isActive: false
      },
      {
        name: "mouseover",
        isActive: false
      },
      {
        name: "mouseup",
        isActive: true
      },
      {
        name: "play",
        isActive: true
      },
      {
        name: "reset",
        isActive: true
      },
      {
        name: "scroll",
        isActive: true
      },
      {
        name: "seeked",
        isActive: true
      },
      {
        name: "seeking",
        isActive: true
      },
      {
        name: "select",
        isActive: true
      },
      {
        name: "storage",
        isActive: true
      },
      {
        name: "submit",
        isActive: true
      },
      {
        name: "timeupdate",
        isActive: false
      },
      {
        name: "volumechange",
        isActive: true
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
        isActive: false
      },
      {
        name: "document",
        isActive: false
      },
      {
        name: "main",
        isActive: true
      },
      {
        name: "h3",
        isActive: true
      },
      {
        name: "p",
        isActive: true
      },
      {
        name: "a",
        isActive: true
      },
      {
        name: "form",
        isActive: true
      },
      {
        name: "input",
        isActive: true
      },
      {
        name: "textarea",
        isActive: true
      },
      {
        name: "select",
        isActive: true
      },
      {
        name: "button",
        isActive: true
      },
      {
        name: "video",
        isActive: true
      },
      {
        name: "img",
        isActive: true
      }
    ];
    return targetDefaults;
  }

  //==========================================================================
  return {
    populateListenerOptions,
    getEventDefaults,
    getTargetDefaults
  };
})();
