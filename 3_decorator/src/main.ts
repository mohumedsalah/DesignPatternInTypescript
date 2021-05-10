import { DarkRoast } from "./Beverage/darkRoast";
import { Milk } from "./Condiments/milk";

const d = new DarkRoast();

const mi = new Milk(d);

const mo = new Milk(mi);

const ret  = mo.calculateCost()


console.log(ret);
