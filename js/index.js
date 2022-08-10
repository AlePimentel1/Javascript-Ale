const productos = [];
const preciosConIVA = [];
let IVA = 1.14;

class Producto {
  constructor(id, nombre, precio) {
    this.nombre = id;
    this.nombre = nombre;
    this.precio = precio;
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

// function procesoCompra() {
//   let bienvenida = alert("Bienvenido a e-Tecno");
//   let verProds = console.table(productos);

//   );
//
//   let selProd = prompt("Seleccione el producto a comprar");
//   if (selProd === "") {
//     alert("Debe seleccionar un producto");
//   } else {
//     let finalizar = alert("Compra Finalizada");
//   }
// }

function procesoCompra() {
  let bienvenida = alert("Bienvenido a e-Tecno");
  let verProds = console.table(productos);

  const preciosActualizados = productos.map((producto) => {
    return preciosConIVA.push(producto.precio * IVA);
  });
  // console.table(preciosConIVA);

  let prod = prompt("Ingresa el producto a buscar");
  const resultado = productos.filter((elemento) =>
    elemento.nombre.includes(prod)
  );
  console.table(resultado);

  let selProd = prompt("Seleccione el producto a comprar");

  if (selProd === "") {
    alert("Debe seleccionar un producto");
  } else {
    switch (selProd) {
      case "Macbook Air 11":
        alert("Su precio a pagar es de US$" + preciosConIVA[0]);
        break;
      case "Macbook Pro":
        alert("Su precio a pagar es de US$" + preciosConIVA[1]);
        break;
      case "Lenovo Ideapad":
        alert("Su precio a pagar es de US$" + preciosConIVA[2]);
        break;
      case "Imac":
        alert("Su precio a pagar es de US$" + preciosConIVA[3]);
        break;
      case "Iphone 11":
        alert("Su precio a pagar es de US$" + preciosConIVA[4]);
        break;
      case "Macbook Air 12":
        alert("Su precio a pagar es de US$" + preciosConIVA[5]);
        break;
      case "Iphone 13":
        alert("Su precio a pagar es de US$" + preciosConIVA[6]);
        break;
    }
  }
}
generarProds();
