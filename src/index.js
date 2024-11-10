import "./style.css";
import { Gameboard } from "./classes/Gameboard.js";
import { Ship } from "./classes/Ship.js";

(() => {
    let div = document.createElement("div");
    let body = document.querySelector("body");

    body.appendChild(div);
})();