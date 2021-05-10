import { Beverage } from "../Beverage/beverage"
import { Condiments } from "./condiments"

export class Milk extends Condiments {
  private cost: number = 0.2
  calculateCost(): number {
    return this.parent.calculateCost() + this.cost
  }
}
