import {Spacecraft, Containership} from './base-ships'
import {MilleniumFalcon} from './starfighters'

//Importar de forma namespace import (importar tudo do lodash)
import * as _ from 'lodash'

console.log(_.pad("TypeScript Examples", 40, "="))

let ship = new Spacecraft('Hyperdrive');
ship.jumpIntoHyperspace();

let falcon = new MilleniumFalcon();
falcon.jumpIntoHyperspace();

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2;
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'YES' : 'NO'}`)