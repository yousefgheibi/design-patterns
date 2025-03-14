import { Circle } from "./concrete-prototypes/circle.class";
import { Rectangle } from "./concrete-prototypes/rectangle.class";

const circle1 = new Circle();
circle1.X = 10;
circle1.Y = 10;
circle1.color = "red";
circle1.radius = 20;

const clonedCircle = circle1.clone();

const rectangle1 = new Rectangle();
rectangle1.X = 5;
rectangle1.Y = 5;
rectangle1.color = "blue";
rectangle1.width = 30;
rectangle1.height = 40;

const clonedRectangle = rectangle1.clone();
