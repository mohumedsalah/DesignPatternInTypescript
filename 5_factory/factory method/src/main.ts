import { RandomProductFactory } from "./factory/randomProductFactory"

const ex = new RandomProductFactory()

for (let i = 0; i < 5; i++) {
  const x1 = ex.createProduct()
  x1.typeOfProduct()
}
