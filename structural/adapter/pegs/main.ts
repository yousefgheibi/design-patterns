import { RoundHole } from "./round-hole.class";
import { RoundPeg } from "./round-peg.class";
import { SquarePegAdapter } from "./square-adapter.class";
import { SquarePeg } from "./square-peg.class";

const hole = new RoundHole(5);
const rpeg = new RoundPeg(5);

console.log(hole.fits(rpeg)); // true

const smallSqPeg = new SquarePeg(5);
const largeSqPeg = new SquarePeg(10);

const smallSqPegAdapter = new SquarePegAdapter(smallSqPeg);
const largeSqPegAdapter = new SquarePegAdapter(largeSqPeg);

console.log(hole.fits(smallSqPegAdapter)); // true
console.log(hole.fits(largeSqPegAdapter)); // false
