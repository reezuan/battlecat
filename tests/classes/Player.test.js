import { Player } from "../../src/classes/Player.js";
import { Gameboard } from "../../src/classes/Gameboard.js";

// -------------------- OBJECT CONSTRUCTOR --------------------

test("constructor returns a defined object", () => {
    const player = new Player("Player 1", false);
    expect(player).toBeDefined();
});

test("creates a Player object", () => {
    const player = new Player("Player 1", false);
    expect(player).toBeInstanceOf(Player);
});

// -------------------- OBJECT PROPERTIES --------------------

// ----- Player.name -----

test("Player.name property is defined", () => {
    const player = new Player("Player 1", false);
    expect(player.name).toBeDefined();
});

test("Player.name property is a string", () => {
    const player = new Player("Player 1", false);
    expect(typeof player.name).toBe("string");
});

test("Player.name property has the correct value", () => {
    const player = new Player("Player 1", false);
    expect(player.name).toBe("Player 1");
});

// ----- Player.isComputerControlled -----

test("Player.isComputerControlled property is defined", () => {
    const player = new Player("Player 1", false);
    expect(player.isComputerControlled).toBeDefined();
});

test("Player.isComputerControlled property is a boolean", () => {
    const player = new Player("Player 1", false);
    expect(typeof player.isComputerControlled).toBe("boolean");
});

describe("Player.isComputerControlled property has the correct value", () => {
    test("false", () => {
        const player = new Player("Player 1", false);
        expect(player.isComputerControlled).toBe(false);
    });

    test("true", () => {
        const player = new Player("Player 1", true);
        expect(player.isComputerControlled).toBe(true);
    });
});

// ----- Player.gameboard -----

test("Player.gameboard property is defined", () => {
    const player = new Player("Player 1", false);
    expect(player.gameboard).toBeDefined();
});

test("Player.gameboard property is an instance of Gameboard", () => {
    const player = new Player("Player 1", false);
    expect(player.gameboard).toBeInstanceOf(Gameboard);
});

test("Player.gameboard property has the correct default value", () => {
    const player = new Player("Player 1", false);
    expect(player.gameboard).toEqual(new Gameboard());
});