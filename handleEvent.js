const handleEvent = (function() {
  let eventLog = document.getElementById("eventLog"),
    prevEvent = {},
    eventRepeatCounter = 1;

  function listener(e) {
    //we only care about the event target, and want to avoid duplicate actions
    //when bubbling up
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

  function getTargetDOMElementFromName(targetName) {
    let eventTarget;
    switch (targetName) {
      case "window":
        eventTarget = window;
        break;
      case "document":
        eventTarget = document;
        break;
      default:
        eventTarget = document.querySelector(targetName);
    }

    return eventTarget;
  }

  return {
    listener,
    getTargetDOMElementFromName
  };
})();
