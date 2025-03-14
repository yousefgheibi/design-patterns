import { Shape } from "../shape.class";

export class Circle extends Shape {
    radius: number;

    constructor() {
        super();
        this.radius = 0;
    }

    constructorFrom(source: Circle) {
        super();
        this.X = source.X;
        this.Y = source.Y;
        this.color = source.color;
        this.radius = source.radius;
    }

    clone(): Shape {
        return new Circle().constructorFrom(this);
    }
}