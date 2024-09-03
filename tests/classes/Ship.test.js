import { Ship } from "../../src/classes/Ship";

let ship = new Ship();

test("creates a Ship object", () => {
    expect(ship).toBeInstanceOf(Ship);
});