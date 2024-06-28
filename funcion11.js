const productos = [
    { nombre: "Samsung TV", precio: 6000, articulos:10},
    { nombre: "DELL notebook", precio: 4000, articulos:30 },
    { nombre: "Auriculares Sony", precio: 1500, articulos: 15},
    { nombre: "Monitor Philips", precio: 12000, articulos: 20},
    { nombre: "Teclado logitech", precio: 3000, articulos:5}
  ];
  
  const listaTotales = calcularTotalesProductos(productos);
  console.log(listaTotales);
  

function calcularTotalesProductos(productos) {

    // Arreglo para almacenar los totales por producto
    const totalesPorProducto = {};
  
    // Recorrer el arreglo de productos
    for (const producto of productos) {
      const nombreProducto = producto.nombre;
      const precioProducto = producto.precio;
      const cantidadProducto = producto.articulos;
  
      // Calcular el valor total del producto
      const totalProducto = precioProducto * cantidadProducto;
  
      // Si el producto ya existe en el arreglo de totales, actualizar su valor total
      if (totalesPorProducto[nombreProducto]) {
        totalesPorProducto[nombreProducto] += totalProducto;
      } else {
        // Si el producto no existe, agregarlo al arreglo de totales
        totalesPorProducto[nombreProducto] = totalProducto;
      }
    }
  
    // Convertir el objeto de totales en un arreglo de objetos con la información de cada producto y su valor total
    const listaTotales = Object.entries(totalesPorProducto).map(([nombreProducto, total]) => ({
      nombre: nombreProducto,
      total: total
    }));
  
    // Devolver el arreglo de totales
    return listaTotales;
  }
  