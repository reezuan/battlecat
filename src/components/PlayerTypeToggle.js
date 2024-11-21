export function PlayerTypeToggle() {
    const playerTypeToggle = document.createElement("div");
    playerTypeToggle.classList.add("switch-container");

    // "Computer" label
    const computerLabel = document.createElement("span");
    computerLabel.classList.add("label");
    computerLabel.textContent = "Computer";

    // "Human" label
    const humanLabel = document.createElement("span");
    humanLabel.classList.add("label");
    humanLabel.textContent = "Human";

    // Switch
    const toggleSwitch = document.createElement("label");
    toggleSwitch.classList.add("switch");

    const slideSwitch = document.createElement("input");
    slideSwitch.setAttribute("type", "checkbox");
    slideSwitch.setAttribute("id", "playerToggle");
    
    const slider = document.createElement("span");
    slider.classList.add("slider");

    slideSwitch.addEventListener("change", () => {
        if (slideSwitch.checked) {
            document.querySelector("[data-player=\"player-two\"]").querySelector("input").disabled = false;
        } else {
            document.querySelector("[data-player=\"player-two\"]").querySelector("input").disabled = true;
        }
    });

    toggleSwitch.appendChild(slideSwitch);
    toggleSwitch.appendChild(slider);

    // Assemble the component
    playerTypeToggle.appendChild(computerLabel);
    playerTypeToggle.appendChild(toggleSwitch);
    playerTypeToggle.appendChild(humanLabel);

    return playerTypeToggle;
}