let miAuto = {};

miAuto.marca = "Toyota";

miAuto.año = 2021;

miAuto.nuevo = true;

let propertyKey = "modelo";

miAuto[propertyKey] = "Corolla";

let anotherPropertyKey = "precio";

miAuto[anotherPropertyKey] = 25000;  // Por ejemplo, 25000

let nextProperty = "color";

miAuto[nextProperty] = "Rojo";

for (let key in miAuto) {//for each
    console.log(key + ": " + miAuto[key]);
}