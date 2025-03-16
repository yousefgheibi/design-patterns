// Step 1: Define the Renderer interface
interface Renderer {
  renderCircle(radius: number): void;
  renderSquare(side: number): void;
}

// Step 2: Implement Concrete Renderer Classes
class SVGRenderer implements Renderer {
  renderCircle(radius: number): void {
    console.log(`<circle r="${radius}" />`);
  }
  renderSquare(side: number): void {
    console.log(`<rect width="${side}" height="${side}" />`);
  }
}

class CanvasRenderer implements Renderer {
  renderCircle(radius: number): void {
    console.log(`Drawing a circle with radius ${radius} on Canvas`);
  }
  renderSquare(side: number): void {
    console.log(`Drawing a square with side ${side} on Canvas`);
  }
}

// Step 3: Define the Abstract Shape Class
abstract class Shape {
  protected renderer: Renderer;
  constructor(renderer: Renderer) {
    this.renderer = renderer;
  }
  abstract draw(): void;
}

// Step 4: Implement Concrete Shapes
class Circle extends Shape {
  private radius: number;
  constructor(renderer: Renderer, radius: number) {
    super(renderer);
    this.radius = radius;
  }
  draw(): void {
    this.renderer.renderCircle(this.radius);
  }
}

class Square extends Shape {
  private side: number;
  constructor(renderer: Renderer, side: number) {
    super(renderer);
    this.side = side;
  }
  draw(): void {
    this.renderer.renderSquare(this.side);
  }
}

// Step 5: Use the Bridge Pattern
const svgRenderer = new SVGRenderer();
const canvasRenderer = new CanvasRenderer();

const circle1 = new Circle(svgRenderer, 10);
circle1.draw(); // Output: <circle r="10" />

const circle2 = new Circle(canvasRenderer, 10);
circle2.draw(); // Output: Drawing a circle with radius 10 on Canvas

const square1 = new Square(svgRenderer, 20);
square1.draw(); // Output: <rect width="20" height="20" />

const square2 = new Square(canvasRenderer, 20);
square2.draw(); // Output: Drawing a square with side 20 on Canvas
