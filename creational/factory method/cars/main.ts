import { CarFactory } from "./car-factory.class";

const cars: string[] = ["Ferrari", "BMW", "Toyota"];
const carName = cars[Math.floor(Math.random() * cars.length)];

const carFactory: CarFactory = new CarFactory();

const obj1 = carFactory.getCar(carName);

obj1?.start();