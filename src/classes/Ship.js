export class Ship {
    
    constructor(length) {
        this.length = length;
        this.timesHit = 0;
    }

    hit() {
        if (this.timesHit < this.length) {
            this.timesHit += 1;
        } else {
            throw new Error("Ship has been hit the maximum allowable number of times.");
        }
    }
}