"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var flyWithFeathers_1 = require("../Behavoir/fly/flyWithFeathers");
var quackRealSound_1 = require("../Behavoir/quack/quackRealSound");
var Duck_1 = require("../Duck");
var MallardDuck = /** @class */ (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        var _this = _super.call(this) || this;
        _this.flyBehavior = new flyWithFeathers_1.FlyWithFeathers();
        _this.quackBehavior = new quackRealSound_1.QuackRealSound();
        return _this;
    }
    MallardDuck.prototype.display = function () {
        console.log("it's Mallard Duck");
    };
    MallardDuck.prototype.swim = function () {
        console.log("Look !! its Mallard Duck swim");
    };
    return MallardDuck;
}(Duck_1.Duck));
exports.MallardDuck = MallardDuck;
