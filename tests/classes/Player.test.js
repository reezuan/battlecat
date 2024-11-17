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