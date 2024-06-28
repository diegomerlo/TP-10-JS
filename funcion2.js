let capitales = {
    argentina: "Buenos Aires",
    uruguay: "Montevideo"
}

let lugar = "uruguay"

console.log(capitales['lugar']);//undefine
console.log(capitales.lugar); //undefine
console.log(capitales[lugar]);//Montevideo
// El primero pasa el nombre de la variable subyacente que va a buscar, en este caso lugar, 
//como no existe dentri de capitales, queda referenciada como undefine
// capitales.lugar no existe, si se quisiese se podría capitales.argentina
console.log(capitales['argentina']);
console.log(capitales.argentina);
console.log(capitales[argentina]);