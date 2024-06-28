const personas = [
  { nombre: "Ana", edad: 28 },
  { nombre: "María", edad: 24 },
  { nombre: "José", edad: 31 },
];

const filtrarPorEdad = (personas, edadMinima) => {
  return personas.filter((persona) => persona.edad >= edadMinima);
};

const personasConMasDe27 = filtrarPorEdad(personas, 27);

console.log(personasConMasDe27);
