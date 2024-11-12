import { Gameboard } from "../../src/classes/Gameboard.js";

// OBJECT CONSTRUCTOR

let gameboard = new Gameboard();

test("constructor returns a defined object", () => {
    expect(gameboard).toBeDefined();
});

test("creates a Gameboard object", () => {
    expect(gameboard).toBeInstanceOf(Gameboard);
});

// OBJECT PROPERTIES

test("'board' property is defined", () => {
    expect(gameboard.board).toBeDefined();
});

test("'board' property is an object", () => {
    expect(gameboard.board).toBeInstanceOf(Object);
});

test("each value in 'board' object has required properties and correct pre-defined values", () => {
    for (const property in gameboard.board) {
        let currentRow = property.substring(1);
        let currentColumn = property.substring(0, 1);
        
        expect(gameboard.board[property]).toHaveProperty("row", currentRow);
        expect(gameboard.board[property]).toHaveProperty("column", currentColumn);
        expect(gameboard.board[property]).toHaveProperty("isHit", false);
        expect(gameboard.board[property]).toHaveProperty("occupiedBy", null);
    }
});