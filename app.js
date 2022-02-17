const archivoDeTareas = require("./funcionesDeTareas");
const command = process.argv[2];

switch (command) {
  case "listar":
    archivoDeTareas.listar();
    break;
  case undefined:
    console.log("pasame algo bro");
    break;
  case "crear":
    let tarea = {
      titulo: process.argv[3],
      estado: "pendiente",
    };
    console.log(tarea);
    archivoDeTareas.crear(tarea);

    console.log("tarea creada con exito");
    break;
  case "filtrar":
    let estado = process.argv[3];
    let tareasFiltradas = archivoDeTareas.filtrarPorEstado(estado);

    archivoDeTareas.listar(tareasFiltradas);
    break;
  case "actualizar":
    let titulo = process.argv[3];
    let estado2 = process.argv[4];
    let tareasActualizadas = archivoDeTareas.actualizar(titulo, estado2);

    archivoDeTareas.listar(tareasActualizadas);
    break;
  case "help":
  case "-h":
    console.log(`comandos habilitados:
    crear:      crea una nueva tarea con estado pendiente. Espera un arg tipo String...
    listar:     lista las tareas pendientes
    help:       te ayudo a que no mandes giladas
    `);
    break;

  default:
    console.log("no te entiedo");
    break;
}
