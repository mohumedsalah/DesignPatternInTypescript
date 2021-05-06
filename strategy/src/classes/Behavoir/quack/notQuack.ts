import { IQuackBehavior } from "../../../interface/IQuackBehavior";

export class QuackGameSound implements IQuackBehavior{
    quack(){
        console.log("there is no sound can't quack..");
    }
}