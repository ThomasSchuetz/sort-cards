class SortingPile {
    constructor(min, max, isIncreasing) {
        this.isIncreasing = isIncreasing;
        this.min = min;
        this.max = max;
        this.currentValue = isIncreasing 
            ? min - 1 
            : max + 1;
    }

    put(card) {

    }
}