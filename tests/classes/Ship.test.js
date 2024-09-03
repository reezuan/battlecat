import { Ship } from "../../src/classes/Ship";

let ship = new Ship();

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
test("timesHit property is 0 by default", () => {
    expect(ship.timesHit).toBe(0);
});