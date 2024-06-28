const personas = [
    { nombre: "Estrella", edad: 30 },
    { nombre: "Alba", edad: 15 },
    { nombre: "Belen", edad: 20 },
    { nombre: "Santiago", edad: 4 },
    { nombre: "Katherine", edad: 55 },
  ];
  
  // Función para comparar objetos por edad
  function compararPorEdad(a, b) {
    return a.edad - b.edad;
  }
  
  // Ordenar el arreglo de personas por edad
  personas.sort(compararPorEdad);
  
  // Asignar la propiedad "posicion" a cada persona
  for (let i = 0; i < personas.length; i++) {
    personas[i].posicion = i + 1;
  }
  
  console.log(personas);
  