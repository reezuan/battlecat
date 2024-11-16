export class Gameboard {
    
    constructor() {
        this.columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        this.rows = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        this.board = this.#buildBoard();
        this.placedShips = {
            carrier: {
                ship: null,
                spaceRequired: 5,
            },
            battleship: {
                ship: null,
                spaceRequired: 4,
            },
            cruiser: {
                ship: null,
                spaceRequired: 3,
            },
            submarine: {
                ship: null,
                spaceRequired: 3,
            },
            destroyer: {
                ship: null,
                spaceRequired: 2,
            }
        };
    }

    /**
     * Place a Ship object at specified coordinates on the board.
     * @param {*} Ship A Ship object.
     * @param {Array<string>} coordinates An array of game board coordinates on which the Ship is to be placed.
     */
    placeShip(Ship, coordinates) {
        // First, check if all the provided coordinates are valid. If at
        // least one isn't valid, throw an error.
        for (let i = 0; i < coordinates.length; i++) {
            if (!this.#isCoordinatesValid(coordinates[i])) {
                throw new Error("One or more coordinates are invalid.");
            }
        }

        // Then, check if the coordinates are contiguous. If they aren't,
        // throw an error.
        if (!this.#isCoordinatesContiguous(coordinates)) {
            throw new Error("Coordinates are not contiguous.");
        }

        // Next, check if the Ship has already been placed on the board.
        // If it has, throw an error.
        if (this.#isShipPlaced(Ship)) {
            throw new Error("Ship has already been placed on the board.");
        }

        // Finally, if all the above checks pass, place the Ship on the board.
        for (const ship in this.placedShips) {
            if (this.placedShips[ship].ship === null && this.placedShips[ship].spaceRequired === Ship.length) {
                this.placedShips[ship].ship = Ship;
                break;
            }
        }
        
        coordinates.forEach(coords => {
            this.board[coords]["occupiedBy"] = Ship;
        });
    }

    /**
     * Receives an attack on the gameboard at a given set of coordinates.
     * @param {string} coordinates A set of coordinates on the gameboard.
     */
    receiveAttack(coordinates) {
        // First, check if the provided coordinates are valid and if the
        // cell has already been hit.
        if (!this.#isCoordinatesValid(coordinates)) {
            throw new Error("The provided coordinates are invalid.");
        } else if (this.board[coordinates].isHit) {
            throw new Error("The provided coordinates have already been attacked.");
        }

        // If valid and not already hit, change the 'isHit' property of
        // that gameboard cell to 'true'.
        this.board[coordinates].isHit = true;

        // Then, check if the cell is occupied by a ship. If it is, call
        // the ship's hit method.
        if (this.board[coordinates].occupiedBy !== null) {
            this.board[coordinates].occupiedBy.hit();
        }
    }

    /**
     * Builds a virtual 10x10 game board.
     * @returns {object} An object representing a 10x10 game board.
     */
    #buildBoard() {
        let board = {};

        for (let i = 0; i < this.columns.length; i++) {
            for (let j = 0; j < this.rows.length; j++) {
                board[`${this.columns[i]}${this.rows[j]}`] = {
                    row: this.rows[j],
                    column: this.columns[i],
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

        let column = coordinates.substring(0, 1);
        let row = coordinates.substring(1);

        return this.columns.includes(column) && this.rows.includes(row);
    }

    /**
     * Checks if the provided coordinates are contiguous.
     * @param {Array<string>} coordinates An array of game board coordinates.
     * @returns {boolean} True if the coordinates are contiguous, false otherwise.
     */
    #isCoordinatesContiguous(coordinates) {
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
                if (this.rows.indexOf(currentRow) - this.rows.indexOf(previousRow) !== 1) {
                    return false;
                }
            } else if (currentRow === previousRow) {
                if (this.columns.indexOf(currentColumn) - this.columns.indexOf(previousColumn) !== 1) {
                    return false;
                }
            } else if (currentColumn !== previousColumn && currentRow !== previousRow) {
                return false;
            }
        }

        return true;
    }

    /**
     * Checks if a Ship has already been placed on the board.
     * @param {*} Ship A Ship object.
     * @returns {boolean} True if the Ship has already been placed on the board, false otherwise.
     */
    #isShipPlaced(Ship) {
        for (const ship in this.placedShips) {
            if (this.placedShips[ship].ship === null && this.placedShips[ship].spaceRequired === Ship.length) {
                return false;
            }
        }

        return true;
    }
}