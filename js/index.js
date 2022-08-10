const productos = [];
let IVA = 1.4;
class Producto {
  constructor(id, nombre, precio) {
    this.nombre = id;
    this.nombre = nombre;
    this.precio = precio;
  }
  precioConIVA() {
    let precioFinal = this.precio * IVA;
    return "US$" + precioFinal;
  }
}
function generarProds() {
  productos.push(new Producto(0123, "Macbook Air 11", 900));
  productos.push(new Producto(4567, "Macbook Pro", 1500));
  productos.push(new Producto(8910, "Lenovo Ideapad", 780));
  productos.push(new Producto(1112, "Imac", 2000));
  productos.push(new Producto(1314, "Iphone 11", 800));
  productos.push(new Producto(1516, "Macbook Air 12", 970));
  productos.push(new Producto(1718, "Iphone 13", 1200));
}

function procesoCompra() {
  let bienvenida = alert("Bienvenido a e-Tecno");
  let verProds = console.table(productos);
  let prod = prompt("Ingresa el producto a buscar");
  const resultado = productos.filter((elemento) =>
    elemento.nombre.includes(prod)
  );
  console.table(resultado);
  let selProd = prompt("Seleccione el producto a comprar");
  if (selProd === "") {
    alert("Debe seleccionar un producto");
  } else {
    precioConIVA(selProd);
    let finalizar = alert("Compra Finalizada");
  }
}
generarProds();
procesoCompra();
