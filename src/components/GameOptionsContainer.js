import { PlayerTypeToggle } from "./PlayerTypeToggle.js";
import { StartGameButton } from "./StartGameButton.js";

export function GameOptionsContainer() {
    const gameOptionsContainer = document.createElement("div");
    gameOptionsContainer.classList.add("game-options");

    const titleText = document.createElement("h2");
    titleText.textContent = "I'm playing against a...";

    const playerTypeToggle = PlayerTypeToggle();
    const startGameButton = StartGameButton();

    gameOptionsContainer.appendChild(titleText);
    gameOptionsContainer.appendChild(playerTypeToggle);
    gameOptionsContainer.appendChild(startGameButton);

    return gameOptionsContainer;
}