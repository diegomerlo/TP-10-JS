let estudiantes = [
    ["Juan", 6],
    ["Mario", 8],
    ["Julia", 10],
    ["Sofia", 2]
];

function actualizarNotas(estudiantes) {
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i][1] > 5) {
            estudiantes[i][1] = Math.min(estudiantes[i][1] + 2, 10);
        }
    }
    return estudiantes;
}

let estudiantesActualizados = actualizarNotas(estudiantes);

console.log(estudiantesActualizados);
