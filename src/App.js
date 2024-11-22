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

    return app;
}