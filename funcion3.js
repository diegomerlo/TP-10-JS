let objeto_demo = {
    usuario: null, edad: 0, direccion: null, fechaNacimiento: null, contraseña: null
}
console.log("Hola mundo");
//faltaría una validación de datos
objeto_demo.usuario = prompt("Ingrese un nombre de usuario: ");
objeto_demo.edad = parseInt(prompt("Ingrese su edad: "));
objeto_demo.direccion = prompt("Ingresa tu direccion: ");
objeto_demo.fechaNacimiento = prompt("Ingrese la fecha de cumpleaños");
objeto_demo.contraseña = prompt("Ingrese una contrsaeña");

alert("Usuario: "+objeto_demo.usuario+" \n Edad: "+objeto_demo.edad+" \n Direccion: "+objeto_demo.direccion+" \n Contraseña: "+objeto_demo.contraseña);