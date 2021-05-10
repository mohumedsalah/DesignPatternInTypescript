import { IFlyBehavior } from "../interface/IFlyBehavior"
import {IQuackBehavior} from "../interface/IQuackBehavior"

export abstract class Duck {
    protected flyBehavior?:IFlyBehavior ;
    protected quackBehavior?:IQuackBehavior;
    
    fly():void {
        this.flyBehavior?.fly();
    }

    quack():void {
        this.quackBehavior?.quack();
    }

    abstract display():void;

    abstract swim():void;

}
