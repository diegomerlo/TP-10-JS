// Arreglo de actores principales
let actoresPrincipales = ['Tom Hanks', 'Johnny Depp', 'Elizabeth Taylor', 'Morgan Freeman', 'Jennifer Aniston', 'Meryl Streep', 'Natalie Portman', 'Ashton Kutcher'];

// Arreglo para almacenar actores con nombre o apellido que comienza con vocal
let actoresVocales = [];

// Objeto para almacenar películas por actor
let peliculaPorActor = {};

// Objeto con actores y películas
let actoresPrincipalesPorPelicula = {
  "Titanic": "Leonardo DiCaprio",
  "El Padrino": "Al Pacino",
  "Matrix": "Keanu Reeves",
  "Iron Man": "Robert Downey Jr",
  "Soy leyenda": "Will Smith",
  "Bastardos sin gloria": "Brad Pitt"
};

// Iterar sobre el arreglo de actores principales
for (const actor of actoresPrincipales) {
  // Dividir el nombre del actor en nombre y apellido (if needed)
  const [nombre, apellido] = actor.split(', '); // Optional split if needed

  // Verificar si el nombre o apellido comienza con vocal
  if (esVocal(nombre?.[0]) || esVocal(apellido?.[0])) { // Handle potential undefined values
    actoresVocales.push(actor);
  }
}

// Función para verificar si un carácter es una vocal
function esVocal(caracter) {
  if (!caracter) return false; // Handle undefined character
  const vocales = ['a', 'e', 'i', 'o', 'u'];
  return vocales.includes(caracter.toLowerCase());
}

// Iterar sobre el objeto de actores y películas
for (const pelicula in actoresPrincipalesPorPelicula) {
  // Obtener el nombre del actor
  const actor = actoresPrincipalesPorPelicula[pelicula];

  // Agregar el nombre del actor al arreglo de actores principales (if needed)
  if (!actoresPrincipales.includes(actor)) {
    actoresPrincipales.push(actor);
  }

  // Agregar el nombre de la película al arreglo de películas (if needed)
  // You can implement logic here to add unique movies if needed

  // Agregar la película al arreglo de películas del actor
  if (!peliculaPorActor[actor]) {
    peliculaPorActor[actor] = [];
  }
  peliculaPorActor[actor].push(pelicula);
}

// Imprimir los resultados
console.log("Actores con nombre o apellido que comienza con vocal:", actoresVocales);
console.log("Arreglo de actores principales:", actoresPrincipales);
console.log("Objeto de películas por actor:", peliculaPorActor);
