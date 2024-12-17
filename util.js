"use strict";
function displayErrorMessage(msg) {
    let errContainer;
    let existing = document.getElementById("list-config-error-container");
    if (existing) {
        existing.innerHTML = "";
        errContainer = existing;
    }
    else {
        errContainer = document.createElement('div');
        document.body.append(errContainer);
    }
    let msgContainer = document.createElement('div');
    msgContainer.style.marginBottom = "2rem";
    let ok = document.createElement('button');
    ok.innerText = "OK";
    ok.onclick = () => {
        errContainer.style.display = "none";
    };
    msgContainer.innerHTML = msg;
    msgContainer.classList.add("error-message-content");
    errContainer.append(msgContainer, ok);
    errContainer.style.position = "absolute";
    errContainer.style.top = "50%";
    errContainer.style.left = "50%";
    errContainer.style.transform = "translate(-50%, -50%)";
    errContainer.style.zIndex = "5";
    errContainer.style.display = "flex";
    errContainer.style.backgroundColor = "white";
    errContainer.style.flexDirection = "column";
    errContainer.style.padding = "1rem";
    errContainer.style.alignItems = "center";
    errContainer.style.border = "2px solid red";
    errContainer.style.fontSize = "1.3rem";
}
