"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.fly = function () {
        this.flyBehavior.fly();
    };
    Duck.prototype.quack = function () {
        this.quackBehavior.quack();
    };
    return Duck;
}());
exports.Duck = Duck;
