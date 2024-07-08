class Diff {
    constructor(name) {
        this._name = name;
    }

    printArrow() {
        setTimeout(() => console.log('Arrow ', this._name), 100);
    }

    printFunction() {
        setTimeout(function () {
            console.log('Function', this._name);
        }, 100);
    }
}

let obj = new Diff('joe');
obj.printArrow();
obj.printFunction();
