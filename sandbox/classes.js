class ABC {
    static counter = 0;

    constructor(count) {
        ABC.counter += count;
    }
}

let letter = new ABC(4);
let letter2 = new ABC(3);
console.log(ABC.counter, letter.counter);
