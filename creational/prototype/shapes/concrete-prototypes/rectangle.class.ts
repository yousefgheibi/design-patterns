import { Shape } from "../shape.class";

export class Rectangle extends Shape {
  width: number;
  height: number;

  constructor() {
    super();
    this.width = 0;
    this.height = 0;
  }

  constructorFrom(source: Rectangle) {
    super();
    this.X = source.X;
    this.Y = source.Y;
    this.color = source.color;
    this.width = source.width;
    this.height = source.height;
  }

  clone(): Shape {
    return new Rectangle().constructorFrom(this);
  }
}
