import { Product } from "./product"

export class ConcreteProduct1 extends Product {
  typeOfProduct(): void {
    console.log("concrete product 1")
  }
}
export class ConcreteProduct2 extends Product {
  typeOfProduct(): void {
    console.log("concrete product 2")
  }
}
export class ConcreteProduct3 extends Product {
  typeOfProduct(): void {
    console.log("concrete product 3")
  }
}
