import { Ship } from "../../src/classes/Ship";

let ship = new Ship(5);

// OBJECT CONSTRUCTOR

test("constructor returns a defined object", () => {
    expect(ship).toBeDefined();
});

test("creates a Ship object", () => {
    expect(ship).toBeInstanceOf(Ship);
});

// OBJECT PROPERTIES

// Test presence of properties
test("has required properties", () => {
    expect(ship).toHaveProperty("length");
    expect(ship).toHaveProperty("timesHit");
});

// Test default property values
test("length property is correctly set", () => {
    let testShip = new Ship(3);
    
    expect(testShip.length).toBe(3);
});

test("timesHit property is 0 by default", () => {
    expect(ship.timesHit).toBe(0);
});

// OBJECT METHODS

// hit()
test("hit() method doesn't return any value", () => {
    expect(ship.hit()).toBeUndefined();
});

test("hit() method throws error if called more times than Ship object's length", () => {
    expect(() => {
        let testShip = new Ship(3);
        let shipLength = testShip.length;

        for (let i = 0; i <= shipLength; i++) {
            testShip.hit();
        }
    }).toThrow();
});

// isSunk()
test("isSunk() returns something", () => {
    let testShip = new Ship(4);

    // Test that something is returned when timesHit !== length.
    expect(testShip.isSunk()).toBeDefined();

    // Test that something is returned when timesHit === length.
    testShip.timesHit = testShip.length;
    expect(testShip.isSunk()).toBeDefined();
});

test("isSunk() returns false if Ship's timesHit property does not equal its length", () => {
    let testShip = new Ship(4);
    
    for (let i = 1; i < testShip.length; i++) {
        testShip.hit();
        expect(testShip.isSunk()).toBe(false);
    }
});

test("isSunk() returns true if Ship's timesHit property equals its length", () => {
    let testShip = new Ship(4);
    
    for (let i = 1; i <= testShip.length; i++) {
        testShip.hit();
    }

    expect(testShip.isSunk()).toBe(true);
});