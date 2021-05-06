import { IFlyBehavior } from "../../../interface/IFlyBehavior";

export class CanNotFly implements IFlyBehavior{
    fly(){
        console.log("this duck can't fly");
    }
}