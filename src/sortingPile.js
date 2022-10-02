class SortingPile {
    constructor(min, max, isIncreasing, improvementValue = 10) {
        this.improvementValue = improvementValue;
        this.isIncreasing = isIncreasing;
        this.min = min;
        this.max = max;
        this.currentValue = isIncreasing
            ? min - 1
            : max + 1;
    }

    put(card) {
        if ((card > this.max) || (card < this.min))
            throw new RangeError("Card value out of bounds!");

        if (this.isIncreasing) {
            let doesIncrease = this.currentValue < card;
            let doesImprove = this.currentValue - this.improvementValue == card;

            if (doesIncrease || doesImprove) {
                this.currentValue = card;
            } else {
                throw new RangeError("Card has to increase value or 'improve' pile.");
            }
        } else {
            let doesDecrease = this.currentValue > card;
            let doesImprove = this.currentValue + this.improvementValue == card;

            if (doesDecrease || doesImprove) {
                this.currentValue = card;
            } else {
                throw new RangeError("Card has to decrease value or 'improve' pile.");
            }
        }
    }
}