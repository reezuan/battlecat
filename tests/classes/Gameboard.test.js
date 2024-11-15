import { Gameboard } from "../../src/classes/Gameboard.js";
import { Ship } from "../../src/classes/Ship.js";

// OBJECT CONSTRUCTOR

let gameboard = new Gameboard();

test("constructor returns a defined object", () => {
    expect(gameboard).toBeDefined();
});

test("creates a Gameboard object", () => {
    expect(gameboard).toBeInstanceOf(Gameboard);
});

// OBJECT PROPERTIES

// Gameboard.board

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

// Gameboard.placedShips

test("Gameboard.placedShips is defined", () => {
    expect(gameboard.placedShips).toBeDefined();
});

test("Gameboard.placedShips is an object", () => {
    expect(gameboard.placedShips).toBeInstanceOf(Object);
});

test("Gameboard.placedShips has exactly 5 properties", () => {
    expect(Object.keys(gameboard.placedShips).length).toBe(5);
});

test("each property in Gameboard.placedShips has correct names", () => {
    expect(gameboard.placedShips).toHaveProperty("carrier");
    expect(gameboard.placedShips).toHaveProperty("battleship");
    expect(gameboard.placedShips).toHaveProperty("cruiser");
    expect(gameboard.placedShips).toHaveProperty("submarine");
    expect(gameboard.placedShips).toHaveProperty("destroyer");
});

test("each object in Gameboard.placedShips has 'ship' and 'spaceRequired' properties", () => {
    for (const ship in gameboard.placedShips) {
        expect(gameboard.placedShips[ship]).toHaveProperty("ship");
        expect(gameboard.placedShips[ship]).toHaveProperty("spaceRequired");
    }
});

test("Gameboard.placedShips.ship is null when initialised", () => {
    for (const ship in gameboard.placedShips) {
        expect(gameboard.placedShips[ship].ship).toBeNull();
    }
});

test("Gameboard.placedShips.spaceRequired has correct value when initialised", () => {
    expect(gameboard.placedShips.carrier.spaceRequired).toBe(5);
    expect(gameboard.placedShips.battleship.spaceRequired).toBe(4);
    expect(gameboard.placedShips.cruiser.spaceRequired).toBe(3);
    expect(gameboard.placedShips.submarine.spaceRequired).toBe(3);
    expect(gameboard.placedShips.destroyer.spaceRequired).toBe(2);
});

test("Gameboard.placedShips.ship is not null after a Ship object is assigned to it", () => {
    let carrier = new Ship(5);
    let battleship = new Ship(4);
    let cruiser = new Ship(3);
    let submarine = new Ship(3);
    let destroyer = new Ship(2);

    gameboard.placeShip(carrier, ["A1", "A2", "A3", "A4", "A5"]);
    gameboard.placeShip(battleship, ["B1", "B2", "B3", "B4"]);
    gameboard.placeShip(cruiser, ["C1", "C2", "C3"]);
    gameboard.placeShip(submarine, ["D1", "D2", "D3"]);
    gameboard.placeShip(destroyer, ["E1", "E2"]);
    
    for (const ship in gameboard.placedShips) {
        expect(gameboard.placedShips[ship].ship).not.toBeNull();
    }
});

test("Gameboard.placedShips.spaceRequired must match the length of the Ship object assigned to Gameboard.placedShips.ship", () => {
    for (const ship in gameboard.placedShips) {
        expect(gameboard.placedShips[ship].spaceRequired).toBe(gameboard.placedShips[ship].ship.length);
    }
});