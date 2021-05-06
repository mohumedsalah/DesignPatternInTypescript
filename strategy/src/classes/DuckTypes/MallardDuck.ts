import { FlyWithFeathers } from "../Behavoir/fly/flyWithFeathers"
import { QuackRealSound } from "../Behavoir/quack/quackRealSound"
import { Duck } from "../Duck"

export class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithFeathers()
    this.quackBehavior = new QuackRealSound()
  }

  display(): void {
    console.log("it's Mallard Duck")
  }
  swim(): void {
    console.log("Look !! its Mallard Duck swim")
  }
}
