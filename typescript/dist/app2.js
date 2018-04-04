"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
//Importar de forma namespace import (importar tudo do lodash)
var _ = require("lodash");
console.log(_.pad("TypeScript Examples", 40, "="));
var ship = new base_ships_1.Spacecraft('Hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new starfighters_1.MilleniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'YES' : 'NO'));
