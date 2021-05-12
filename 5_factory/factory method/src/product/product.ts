export abstract class Product {
  protected availableNum: number
  constructor() {
    this.availableNum = 20
  }

  public printAvailableNumber() {
    console.log(`this product have : ${this.availableNum}`)
  }


  abstract typeOfProduct():void;
}
