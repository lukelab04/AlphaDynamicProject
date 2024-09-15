"use strict";
function displayErrorMessage(msg) {
    var errContainer;
    var existing = document.getElementById("list-config-error-container");
    if (existing) {
        existing.innerHTML = "";
        errContainer = existing;
    }
    else {
        errContainer = document.createElement('div');
        document.body.append(errContainer);
    }
    var msgContainer = document.createElement('div');
    msgContainer.style.marginBottom = "2rem";
    var ok = document.createElement('button');
    ok.innerText = "OK";
    ok.onclick = function () {
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
