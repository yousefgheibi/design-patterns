import { ShapeFactory } from "./shape-factory.class";

const shapes: string[] = ["Circle", "Square", "Rectangle"];
const shapeName = shapes[Math.floor(Math.random() * shapes.length)];

const shapeFactory: ShapeFactory = new ShapeFactory();

const obj1 = shapeFactory.getShape(shapeName);

obj1?.draw();
