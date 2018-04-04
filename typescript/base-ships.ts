//export class Spacecraft {
class Spacecraft {
    //Definir propriedade e receber valor de forma reduzida com modificador public
    constructor(public propulsor: string){}

    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`);
    }
}

//export interface Containership {
interface Containership {

    cargoContainers: number;
}

export {Spacecraft, Containership}