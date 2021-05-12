import {
  ConcreteProduct1,
  ConcreteProduct3,
  ConcreteProduct2,
} from "../product/concreteProduct"
import { Product } from "../product/product"
import { ProductFactory } from "./productFactory"

export class RandomProductFactory extends ProductFactory {
  createProduct(): Product {
    const num = Math.floor(Math.random() * 3) + 1
    switch (num) {
      case 1:
        return new ConcreteProduct1()
      case 2:
        return new ConcreteProduct2()

      default:
        return new ConcreteProduct3()
    }
  }
}
