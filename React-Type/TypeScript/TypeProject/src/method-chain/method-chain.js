"use strict";
exports.__esModule = true;
var Calculator = /** @class */ (function () {
    function Calculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    Calculator.prototype.add = function (value) {
        this.value += value;
        return this;
    };
    Calculator.prototype.multiply = function (value) {
        this.value *= value;
        return this;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
