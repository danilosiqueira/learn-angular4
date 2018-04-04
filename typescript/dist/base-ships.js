"use strict";
exports.__esModule = true;
//export class Spacecraft {
var Spacecraft = /** @class */ (function () {
    //Definir propriedade e receber valor de forma reduzida com modificador public
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
