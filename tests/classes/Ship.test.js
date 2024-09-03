import { Ship } from "../../src/classes/Ship";

let ship = new Ship();

test("constructor returns a defined object", () => {
    expect(ship).toBeDefined();
});

test("creates a Ship object", () => {
    expect(ship).toBeInstanceOf(Ship);
});

test("has required properties", () => {
    expect(ship).toHaveProperty("length");
    expect(ship).toHaveProperty("timesHit");
    expect(ship).toHaveProperty("isSunk");
});