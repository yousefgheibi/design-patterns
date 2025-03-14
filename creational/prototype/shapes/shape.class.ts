export abstract class Shape {
  X: number;
  Y: number;
  color: string;

  constructor() {
    this.X = 0;
    this.Y = 0;
    this.color = "";
  }

  constructorFrom(source: Shape) {
    this.X = source.X;
    this.Y = source.Y;
    this.color = source.color;
  }

  abstract clone(): Shape;
}
