export function StartGameButton() {
    const startGameButton = document.createElement("button");

    startGameButton.classList.add("start-game");
    startGameButton.textContent = "Start game";

    return startGameButton;
}