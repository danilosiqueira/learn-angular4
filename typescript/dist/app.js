var message = "Help me, obi-wan Kenobi";
console.log(message);
var episode = 4;
//episode = '';
console.log(episode);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
//Função
var distance = 11;
//Template string
console.log("Is " + distance + " parsecs enough to beat Millenium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
//Arrow function
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
//Função com valor padrão de parâmetros
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5,1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
