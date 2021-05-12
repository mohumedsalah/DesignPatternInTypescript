import { Product } from "../product/product";

export abstract class ProductFactory {
    abstract createProduct():Product;
}
