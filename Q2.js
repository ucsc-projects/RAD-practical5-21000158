class Shape {
    constructor() {
        if (this.constructor == Shape) {
            throw new Error("Abstract classes cannot be instantiated")
        }
    }

    calculateSurfaceArea() {
        throw new Error("This method should be implemented")
    }

    calculateVolume() {
        throw new Error("This method should be implemented")
    }
}

class Cube extends Shape {
    length

    constructor(length) {
        super();
        this.length = length
    }

    calculateSurfaceArea() {
        return this.length * this.length * 6;
    }

    calculateVolume() {
        return this.length * this.length * this.length;
    }
}

class Cuboid extends Shape {
    length
    height
    width

    constructor(length, height, width) {
        super();
        this.length = length
        this.width = width
        this.height = height
    }

    calculateSurfaceArea() {
        return this.length * this.width * 4 + this.width * this.height * 2;
    }

    calculateVolume() {
        return this.length * this.width * this.height;
    }
}

class Cylinder extends Shape {
    radius
    height

    constructor(radius, height) {
        super();
        this.radius = radius
        this.height = height
    }

    calculateSurfaceArea() {
        return Math.PI * this.radius * this.radius * 2 + 2 * Math.PI * this.radius * this.height;
    }

    calculateVolume() {
        return Math.PI * this.radius * this.radius * this.height;
    }
}

class Sphere extends Shape {
    radius

    constructor(radius) {
        super();
        this.radius = radius
    }

    calculateSurfaceArea() {
        return 4 * Math.PI * this.radius * this.radius;
    }

    calculateVolume() {
        return 4 / 3 * Math.PI * this.radius * this.radius * this.radius;
    }
}

class Cone extends Shape {
    radius
    height
    sLength

    constructor(radius, height, sLength) {
        super();
        this.radius = radius
        this.height = height
        this.sLength = sLength
    }

    calculateSurfaceArea() {
        return Math.PI * this.radius * this.radius + Math.PI * this.radius * this.sLength;
    }

    calculateVolume() {
        return 1 / 3 * Math.PI * this.radius * this.radius * this.height;
    }
}