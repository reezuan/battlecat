import { Player } from "../../src/classes/Player.js";

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