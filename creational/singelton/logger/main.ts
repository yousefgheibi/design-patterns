import { Logger } from "./logger";

const obj1 = Logger.getInstance();
const obj2 = Logger.getInstance();

console.log(obj1 == obj2);
