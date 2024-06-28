const peliculas = [
    { titulo: "Busqueda implacable", rating: 5, loHasVisto: true },
    { titulo: "Norbit", rating: 3, loHasVisto: false },
    { titulo: "Mini espías", rating: 2, loHasVisto: true },
    { titulo: "La vida es bella", rating: 5, loHasVisto: false },
];

for (const pelicula of peliculas) {

    let mensaje = "";

    if (pelicula.loHasVisto) {
        mensaje = `Viste "${pelicula.titulo}"`;
    } else {
        mensaje = `No viste "${pelicula.titulo}"`;
    }

    mensaje += ` (${pelicula.rating} estrellas)`;
    console.log(mensaje);
}
