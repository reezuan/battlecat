import { Gameboard } from "./Gameboard.js";

export class Player {
    
    /**
     * @param {string} name The name of the player.
     * @param {boolean} isComputerControlled True if the player is computer-controlled, false otherwise.
     */
    constructor(name, isComputerControlled) {
        this.name = name;
        this.isComputerControlled = isComputerControlled;
        this.gameboard = new Gameboard();
    }
}