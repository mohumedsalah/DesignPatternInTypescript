import { Beverage } from "../Beverage/beverage"

export abstract class Condiments extends Beverage {
  constructor(protected parent: Beverage) {
      super();
  }

  
}
