let precio = 100;
console.log("Precio: $" + precio);
let descuento = precio > 50 && "¡Descuento aplicado!";
console.log(descuento);
if (precio > 50) {
  console.log("¡Aprobado para descuento!");
} else {
  console.log("Sin descuento");
}
for (let i = 1; i <= 3; i++) {
  console.log(`Producto ${i} procesado`);
}
function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}
console.log("Total: $" + calcularTotal(100, 2));
const producto = {
  nombre: "Camisa",
  precio: 100,
  colores: ["azul", "blanco"]
};
console.log(`${producto.nombre}: $${producto.precio}`);
