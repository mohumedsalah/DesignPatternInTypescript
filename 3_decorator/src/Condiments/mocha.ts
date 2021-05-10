import { Beverage } from "../Beverage/beverage"
import { Condiments } from "./condiments"

export class Mocha extends Condiments {
  private cost: number = 0.35
  calculateCost(): number {
    return this.parent.calculateCost() + this.cost
  }
}
