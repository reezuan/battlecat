import { Gameboard } from "./classes/Gameboard.js";
import { Player } from "./classes/Player.js";
import { Ship } from "./classes/Ship.js";
import { TitleImage } from "./components/TitleImage.js";
import { NameInputContainer } from "./components/NameInputContainer.js";
import { GameOptionsContainer } from "./components/GameOptionsContainer.js";
import { Footer } from "./components/Footer.js";

export function App() {
    const app = document.createElement("div");
    app.classList.add("app");

    // INTRO SCREEN
    app.appendChild(TitleImage());
    app.appendChild(NameInputContainer(true));
    app.appendChild(NameInputContainer(false));
    app.appendChild(GameOptionsContainer());
    app.appendChild(Footer());

    const startGameButton = app.querySelector("button.start-game");

    startGameButton.addEventListener("click", () => {
        const playerOneNameInput = document.querySelector("[data-player=\"player-one\"] input");
        const playerTwoNameInput = document.querySelector("[data-player=\"player-two\"] input");
        const isPlayerTwoHuman = document.querySelector("#playerToggle").checked;

        if (isPlayerTwoHuman) {
            if (playerOneNameInput.value === "" && playerTwoNameInput.value === "") {
                document.querySelector("button.start-game").textContent = "Fill in player names!";
            
                setTimeout(() => {
                    document.querySelector("button.start-game").textContent = "Start game";
                }, 1500);
            
                return;
            } else if (playerOneNameInput.value !== "" && playerTwoNameInput.value === "") {
                document.querySelector("button.start-game").textContent = "Fill in Player 2 name!";
            
                setTimeout(() => {
                    document.querySelector("button.start-game").textContent = "Start game";
                }, 1500);
            
                return;
            } else if (playerOneNameInput.value === "" && playerTwoNameInput.value !== "") {
                document.querySelector("button.start-game").textContent = "Fill in Player 1 name!";
            
                setTimeout(() => {
                    document.querySelector("button.start-game").textContent = "Start game";
                }, 1500);
            
                return;
            }
        } else {
            if (playerOneNameInput.value === "") {
                document.querySelector("button.start-game").textContent = "Fill in Player 1 name!";
                
                setTimeout(() => {
                    document.querySelector("button.start-game").textContent = "Start game";
                  }, 1500);
                
                return;
            }
        }
    });

    // 2) When the player clicks the "Start Game" button, fade out and eventually
    // remove the introduction screen. Then, show the gameboards.

    // MAIN GAME SCREEN

    return app;
}