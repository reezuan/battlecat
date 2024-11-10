export class Gameboard {
    #board;
    #placedShips;

    constructor() {
        this.#board = this.#buildBoard();
    }

    /**
     * Builds a virtual 10x10 game board.
     * @returns {object} An object representing a 10x10 game board.
     */
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

    #isCoordinatesValid(coordinates) {
        if (typeof coordinates !== "string") {
            return false;
        }
        
        const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        const rows = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

        let column = coordinates.substring(0, 1);
        let row = coordinates.substring(1);

        return columns.includes(column) && rows.includes(row);
    }

    /**
     * Checks if the provided coordinates are contiguous.
     * @param {Array<string>} coordinates An array of game board coordinates.
     * @returns {boolean} True if the coordinates are contiguous, false otherwise.
     */
    #isCoordinatesContiguous(coordinates) {
        const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        const rows = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        
        // Start for-loop from the second set of coordinates.
        for (let i = 1; i < coordinates.length; i++) {
            let currentColumn = coordinates[i].substring(0, 1);
            let previousColumn = coordinates[i - 1].substring(0, 1);
            let currentRow = coordinates[i].substring(1);
            let previousRow = coordinates[i - 1].substring(1);

            // For any given array of board coordinates for a ship
            // placement, either the column is the same and the rows
            // are different or the row is the same and the columns are
            // different.
            // 
            // Once we determine which of the two is the same, we can
            // then check for the other.
            if (currentColumn === previousColumn) {
                if (rows.indexOf(currentRow) - rows.indexOf(previousRow) !== 1) {
                    return false;
                }
            } else if (currentRow === previousRow) {
                if (columns.indexOf(currentColumn) - columns.indexOf(previousColumn) !== 1) {
                    return false;
                }
            } else if (currentColumn !== previousColumn && currentRow !== previousRow) {
                return false;
            }
        }

        return true;
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
// - Determine if a set of coordinates is valid