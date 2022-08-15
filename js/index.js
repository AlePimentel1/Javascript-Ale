const bienvenida = alert(
  "Llene los campos y luego envie el formulario (Recibira sus datos en consola)"
);
const camposDeTexto = document.querySelectorAll("input");
const captadorBtn = document.querySelector(".btn.btn-info");

function captarTextoDeCampo() {
  camposDeTexto.forEach((e) => {
    console.log(e.value);
  });
}

function enviarInput() {
  captadorBtn.addEventListener("click", () => {
    console.log("Se ha hecho click sobre el boton");
  });
}

enviarInput();
