import { IFlyBehavior } from "../../../interface/IFlyBehavior";

export class FlyWithFeathers implements IFlyBehavior{
    fly(){
        console.log("this duck fly with features");
    }
}