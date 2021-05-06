import { IFlyBehavior } from "../../../interface/IFlyBehavior";

export class FlyWithoutFeathers implements IFlyBehavior{
    fly(){
        console.log("this duck can fly but without features");
    }
}