import { Beverage } from "./beverage"

export class DarkRoast extends Beverage {
  private cost: number = 15
  constructor() {
    super()
  }

  calculateCost(): number {
    return this.cost
  }
}
