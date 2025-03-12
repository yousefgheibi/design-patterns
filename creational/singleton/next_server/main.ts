import { Servers } from "./servers";

const obj1 = Servers.getInstance();
const obj2 = Servers.getInstance();

for (let index = 0; index < 4; index++) {
  console.log(obj1.nextServer());
  console.log(obj2.nextServer());
}
