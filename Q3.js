class Book {
    name
    price
    author
    publisher
    discount


    constructor(name, price, author, publisher) {
        if (this.constructor == Book) {
            throw new Error("Abstract classes cannot be instantiated")
        }
        this.name = name;
        this.price = price;
        this.author = author;
        this.publisher = publisher;
        this.calculateDiscount()
    }

    calculateDiscount() {
        throw new Error("This method should be implemented")
    }
}

class EduBook extends Book {

    constructor(name, price, author, publisher) {
        super(name, price, author, publisher);
    }

    calculateDiscount() {
        this.discount = this.price * 0.2
    }
}

class Novel extends Book {

    constructor(name, price, author, publisher) {
        super(name, price, author, publisher);
    }

    calculateDiscount() {
        this.discount = this.price * 0.15
    }
}

class ShortStory extends Book {

    constructor(name, price, author, publisher) {
        super(name, price, author, publisher);
    }

    calculateDiscount() {
        this.discount = this.price * 0.15
    }
}

class Biography extends Book {

    constructor(name, price, author, publisher) {
        super(name, price, author, publisher);
    }

    calculateDiscount() {
        this.discount = this.price * 0.1
    }
}

b1 = new Biography("Intro to Java 8", 250.00, "James Gossling", "Oracle")
console.log(b1.discount)
console.log(b1.name)

