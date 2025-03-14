import { Director } from "./director.class";
import { StoneHouseBuilder } from "./stone-house-buildder.class";
import { WoodenHouseBuilder } from "./wooden-house-builder.class";

// استفاده از الگو
const director = new Director();

// ساخت خانه چوبی
const woodenBuilder = new WoodenHouseBuilder();
const woodenHouse = director.constructSimpleHouse(woodenBuilder);
woodenHouse.show(); // خروجی: House with Wooden walls, Wooden roof, and Wooden floor.

// ساخت خانه سنگی
const stoneBuilder = new StoneHouseBuilder();
const stoneHouse = director.constructSimpleHouse(stoneBuilder);
stoneHouse.show(); // خروجی: House with Stone walls, Stone roof, and Stone floor.
