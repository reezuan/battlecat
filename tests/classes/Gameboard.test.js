import { Gameboard } from "../../src/classes/Gameboard.js";
import { Ship } from "../../src/classes/Ship.js";

afterEach(() => {
    jest.restoreAllMocks();
});

// -------------------- OBJECT CONSTRUCTOR --------------------

test("constructor returns a defined object", () => {
    const gameboard = new Gameboard();
    expect(gameboard).toBeDefined();
});

test("creates a Gameboard object", () => {
    const gameboard = new Gameboard();
    expect(gameboard).toBeInstanceOf(Gameboard);
});

// -------------------- OBJECT PROPERTIES --------------------

// ----- Gameboard.board -----

test("'board' property is defined", () => {
    const gameboard = new Gameboard();
    expect(gameboard.board).toBeDefined();
});

test("'board' property is an object", () => {
    const gameboard = new Gameboard();
    expect(gameboard.board).toBeInstanceOf(Object);
});

test("each value in 'board' object has required properties and correct pre-defined values", () => {
    const gameboard = new Gameboard();

    for (const property in gameboard.board) {
        let currentRow = property.substring(1);
        let currentColumn = property.substring(0, 1);
        
        expect(gameboard.board[property]).toHaveProperty("row", currentRow);
        expect(gameboard.board[property]).toHaveProperty("column", currentColumn);
        expect(gameboard.board[property]).toHaveProperty("isHit", false);
        expect(gameboard.board[property]).toHaveProperty("occupiedBy", null);
    }
});

// ----- Gameboard.placedShips -----

test("Gameboard.placedShips is defined", () => {
    const gameboard = new Gameboard();
    expect(gameboard.placedShips).toBeDefined();
});

test("Gameboard.placedShips is an object", () => {
    const gameboard = new Gameboard();
    expect(gameboard.placedShips).toBeInstanceOf(Object);
});

test("Gameboard.placedShips has exactly 5 properties", () => {
    const gameboard = new Gameboard();
    expect(Object.keys(gameboard.placedShips).length).toBe(5);
});

test("each property in Gameboard.placedShips has correct names", () => {
    const gameboard = new Gameboard();

    expect(gameboard.placedShips).toHaveProperty("carrier");
    expect(gameboard.placedShips).toHaveProperty("battleship");
    expect(gameboard.placedShips).toHaveProperty("cruiser");
    expect(gameboard.placedShips).toHaveProperty("submarine");
    expect(gameboard.placedShips).toHaveProperty("destroyer");
});

test("each object in Gameboard.placedShips has 'ship' and 'spaceRequired' properties", () => {
    const gameboard = new Gameboard();
    
    for (const ship in gameboard.placedShips) {
        expect(gameboard.placedShips[ship]).toHaveProperty("ship");
        expect(gameboard.placedShips[ship]).toHaveProperty("spaceRequired");
    }
});

test("Gameboard.placedShips.ship is null when initialised", () => {
    const gameboard = new Gameboard();

    for (const ship in gameboard.placedShips) {
        expect(gameboard.placedShips[ship].ship).toBeNull();
    }
});

test("Gameboard.placedShips.spaceRequired has correct value when initialised", () => {
    const gameboard = new Gameboard();
    
    expect(gameboard.placedShips.carrier.spaceRequired).toBe(5);
    expect(gameboard.placedShips.battleship.spaceRequired).toBe(4);
    expect(gameboard.placedShips.cruiser.spaceRequired).toBe(3);
    expect(gameboard.placedShips.submarine.spaceRequired).toBe(3);
    expect(gameboard.placedShips.destroyer.spaceRequired).toBe(2);
});

test("Gameboard.placedShips.ship is not null after a Ship object is assigned to it", () => {
    const gameboard = new Gameboard();

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
    const gameboard = new Gameboard();

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
        expect(gameboard.placedShips[ship].spaceRequired).toBe(gameboard.placedShips[ship].ship.length);
    }
});

// ----- Gameboard.placeShip -----

test("throws if at least one of the coordinates is not a valid set of coordinates", () => {
    expect(() => {
        const gameboard = new Gameboard();
        const carrier = new Ship(5);

        gameboard.placeShip(carrier, ["A1", "A2", "cat", "A4", "A5"]);
    }).toThrow("One or more coordinates are invalid.");
});

test("throws if at least one of the coordinates' row/column is outside the board's range", () => {
    expect(() => {
        const gameboard = new Gameboard();
        const carrier = new Ship(5);

        gameboard.placeShip(carrier, ["A7", "A8", "A9", "A10", "A11"]);
    }).toThrow("One or more coordinates are invalid.");

    expect(() => {
        const gameboard = new Gameboard();
        const carrier = new Ship(5);

        gameboard.placeShip(carrier, ["I7", "J7", "K7", "L7", "M7"]);
    }).toThrow("One or more coordinates are invalid.");
});

test("throws if the coordinates are not contiguous", () => {
    expect(() => {
        const gameboard = new Gameboard();
        const carrier = new Ship(5);

        gameboard.placeShip(carrier, ["A1", "A2", "A3", "A4", "A6"]);
    }).toThrow("Coordinates are not contiguous.");
});

test("throws when placing more than one instance of Ship with length 5, 4, or 2 on the board", () => {
    expect(() => {
        const gameboard = new Gameboard();
        const carrier = new Ship(5);
        const secondCarrier = new Ship(5);

        gameboard.placeShip(carrier, ["A1", "A2", "A3", "A4", "A5"]);
        gameboard.placeShip(secondCarrier, ["B1", "B2", "B3", "B4", "B5"]);
    }).toThrow("Ship has already been placed on the board.");

    expect(() => {
        const gameboard = new Gameboard();
        const battleship = new Ship(4);
        const secondBattleship = new Ship(4);

        gameboard.placeShip(battleship, ["A1", "A2", "A3", "A4"]);
        gameboard.placeShip(secondBattleship, ["B1", "B2", "B3", "B4"]);
    }).toThrow("Ship has already been placed on the board.");

    expect(() => {
        const gameboard = new Gameboard();
        const destroyer = new Ship(2);
        const secondDestroyer = new Ship(2);

        gameboard.placeShip(destroyer, ["A1", "A2"]);
        gameboard.placeShip(secondDestroyer, ["B1", "B2"]);
    }).toThrow("Ship has already been placed on the board.");
});

test("doesn't throw if two ships of length 3 are placed on the board", () => {
    expect(() => {
        const gameboard = new Gameboard();
        const cruiser = new Ship(3);
        const submarine = new Ship(3);

        gameboard.placeShip(cruiser, ["A1", "A2", "A3"]);
        gameboard.placeShip(submarine, ["B1", "B2", "B3"]);
    }).not.toThrow();
});


test("when ship is placed, the correct 'ship' property is updated", () => {
    const gameboard = new Gameboard();
    
    const carrier = new Ship(5);
    const battleship = new Ship(4);
    const cruiser = new Ship(3);
    const submarine = new Ship(3);
    const destroyer = new Ship(2);

    gameboard.placeShip(carrier, ["A1", "A2", "A3", "A4", "A5"]);
    gameboard.placeShip(battleship, ["B1", "B2", "B3", "B4"]);
    gameboard.placeShip(cruiser, ["C1", "C2", "C3"]);
    gameboard.placeShip(submarine, ["D1", "D2", "D3"]);
    gameboard.placeShip(destroyer, ["E1", "E2"]);

    expect(gameboard.placedShips.carrier.ship).toBe(carrier);
    expect(gameboard.placedShips.battleship.ship).toBe(battleship);
    expect(gameboard.placedShips.cruiser.ship).toBe(cruiser);
    expect(gameboard.placedShips.submarine.ship).toBe(submarine);
    expect(gameboard.placedShips.destroyer.ship).toBe(destroyer);
});

test("correct properties in 'board' property are updated when ship is placed", () => {
    const gameboard = new Gameboard();

    const carrier = new Ship(5);
    const battleship = new Ship(4);
    const cruiser = new Ship(3);
    const submarine = new Ship(3);
    const destroyer = new Ship(2);

    gameboard.placeShip(carrier, ["A1", "A2", "A3", "A4", "A5"]);
    gameboard.placeShip(battleship, ["B1", "B2", "B3", "B4"]);
    gameboard.placeShip(cruiser, ["C1", "C2", "C3"]);
    gameboard.placeShip(submarine, ["D1", "D2", "D3"]);
    gameboard.placeShip(destroyer, ["E1", "E2"]);

    expect(gameboard.board["A1"].occupiedBy).toBe(carrier);
    expect(gameboard.board["A2"].occupiedBy).toBe(carrier);
    expect(gameboard.board["A3"].occupiedBy).toBe(carrier);
    expect(gameboard.board["A4"].occupiedBy).toBe(carrier);
    expect(gameboard.board["A5"].occupiedBy).toBe(carrier);

    expect(gameboard.board["B1"].occupiedBy).toBe(battleship);
    expect(gameboard.board["B2"].occupiedBy).toBe(battleship);
    expect(gameboard.board["B3"].occupiedBy).toBe(battleship);
    expect(gameboard.board["B4"].occupiedBy).toBe(battleship);

    expect(gameboard.board["C1"].occupiedBy).toBe(cruiser);
    expect(gameboard.board["C2"].occupiedBy).toBe(cruiser);
    expect(gameboard.board["C3"].occupiedBy).toBe(cruiser);

    expect(gameboard.board["D1"].occupiedBy).toBe(submarine);
    expect(gameboard.board["D2"].occupiedBy).toBe(submarine);
    expect(gameboard.board["D3"].occupiedBy).toBe(submarine);

    expect(gameboard.board["E1"].occupiedBy).toBe(destroyer);
    expect(gameboard.board["E2"].occupiedBy).toBe(destroyer);
});