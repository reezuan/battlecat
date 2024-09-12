import { Gameboard } from "../../src/classes/Gameboard.js";

// OBJECT CONSTRUCTOR

let gameboard = new Gameboard();

test("constructor returns a defined object", () => {
    expect(gameboard).toBeDefined();
});

test("creates a Gameboard object", () => {
    expect(gameboard).toBeInstanceOf(Gameboard);
});