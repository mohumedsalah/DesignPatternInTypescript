import { IQuackBehavior } from "../../../interface/IQuackBehavior";

export class QuackRealSound implements IQuackBehavior{
    quack(){
        console.log("sound quack it's real sound for real duck");
    }
}