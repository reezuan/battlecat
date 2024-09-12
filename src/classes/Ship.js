export class Ship {
    
    constructor(length) {
        this.length = length;
        this.timesHit = 0;
    }

    /**
     * Increments the object's timesHit property by 1. Throws an error
     * if called when object's timesHit property value is equal to its
     * length property value.
     */
    hit() {
        if (this.timesHit < this.length) {
            this.timesHit += 1;
        } else {
            throw new Error("Ship has been hit the maximum allowable number of times.");
        }
    }

    /** 
     * Calculates whether a ship is considered sunk based on its
     * length and the number of hits it has received.
     */
    isSunk() {
        return this.timesHit === this.length; 
    }
}