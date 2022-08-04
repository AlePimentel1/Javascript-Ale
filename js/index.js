debugger;
function verPeliculas() {
  let bienvenida = alert("Bienvenido a BestMovies");
  let genero = prompt(
    "Seleccione el género que desea ver: Accion, Comedia o Terror"
  );
  console.table(seleccionarGenero(genero));

  if (genero === "") {
    alert("Asegurate de haber elegido un genero");
  } else {
    seleccionarPelicula();
  }
}

function seleccionarGenero(genero) {
  if (genero === "Accion") {
    return peliculasAccion;
  } else if (genero === "Comedia") {
    return peliculasComedia;
  } else if (genero === "Terror") {
    return peliculasTerror;
  } else {
    alert("Asegurate de haber escogido un genero");
  }
}
function seleccionarPelicula() {
  let pelicula = prompt("Escriba su pelicula:");
  if (pelicula === "") {
    alert("No eligio ninguna pelicula");
  } else {
    alert("Cargando...");
  }
}

verPeliculas();
