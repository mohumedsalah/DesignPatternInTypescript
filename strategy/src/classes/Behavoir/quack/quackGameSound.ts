import { IQuackBehavior } from "../../../interface/IQuackBehavior";

export class QuackGameSound implements IQuackBehavior{
    quack(){
        console.log("sound quack it's game sound for fake duck");
    }
}