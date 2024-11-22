import { NameInput } from "./NameInput.js";
import AdmiralOiia from "../assets/admiral-oiia.png";
import AdmiralMaxwell from "../assets/admiral-maxwell.png";

/**
 * @param {boolean} isPlayerOne 
 * @returns 
 */
export function NameInputContainer(isPlayerOne) {
    const container = document.createElement("div");
    container.classList.add("name-input");
    container.setAttribute("data-player", isPlayerOne ? "player-one" : "player-two");

    const playerImage = new Image();
    playerImage.src = isPlayerOne ? AdmiralOiia : AdmiralMaxwell;
    
    const namePrompt = document.createElement("span");
    namePrompt.textContent = `Enter Player ${ isPlayerOne ? "1" : "2" } name:`;
    
    const playerNameInput = NameInput();
    playerNameInput.querySelector("input").disabled = isPlayerOne ? false : true;
    
    container.appendChild(playerImage);
    container.appendChild(namePrompt);
    container.appendChild(playerNameInput);

    return container;
}