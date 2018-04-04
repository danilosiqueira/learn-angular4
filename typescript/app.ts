let message: string = "Help me, obi-wan Kenobi";
console.log(message);

let episode: number = 4;
//episode = '';
console.log(episode);

let isEnoughToBeatMF = function (parsecs: number): boolean {
    return parsecs < 12;
}

//Função
let distance = 11;
//Template string
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`);

//Arrow function
let call = (name: string) => console.log(`Do you copy, ${name}?`);
call('R2');

//Função com valor padrão de parâmetros
function inc (speed: number, inc: number = 1): number {
    return speed + inc;
}

console.log(`inc (5,1) = ${inc(5, 1)}`);
console.log(`inc (5) = ${inc(5)}`);

