export class Gameboard {
    #board;
    #placedShips;

    constructor() {
        this.#board = this.#buildBoard();
    }

    #buildBoard() {
        const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        const rows = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        let board = {};

        for (let i = 0; i < columns.length; i++) {
            for (let j = 0; j < rows.length; j++) {
                board[`${columns[i]}${rows[j]}`] = {
                    row: rows[j],
                    column: columns[i],
                    isHit: false,
                    occupiedBy: null
                }
            }
        }
        
        return board;
    }
}

// Properties
// - #board (object)
// - #placedShips (array)

// Methods
// - receiveAttack (Takes a pair of coordinates, determines if the attack hit a ship, sends hit function to correct ship or record coordinates)
// - placeShip (Adds each ship as an element to this.placedShips)
// - Return the object that is on a pair of coordinates
// - Report whether all ships have been sunk