const fs = require("fs");

let archivoDeTareas = {
  file: "tareas.json",
  leerArchivo() {
    return JSON.parse(fs.readFileSync(this.file, "utf-8"));
  },
  escribirArchivo(tareas) {
    let tareasJson = JSON.stringify(tareas);
    fs.writeFileSync(this.file, tareasJson);
  },

  listar(tareasFiltradas) {
    if (!tareasFiltradas) {
      let tareas = this.leerArchivo();
      tareas.forEach((tarea, i) => {
        console.log(`
         [${i + 1}] tarea: ${tarea.titulo} *** estado: ${tarea.estado}
        `);
      });
    } else {
      tareasFiltradas.forEach((tarea, i) => {
        console.log(`
         [${i + 1}] tarea: ${tarea.titulo} *** estado: ${tarea.estado}
        `);
      });
    }
  },

  crear(tarea) {
    // ver lo que tengo
    let tareas = this.leerArchivo();
    //agrego la tarea al array de tareas
    tareas.push(tarea);
    //actualizo el archivo
    this.escribirArchivo(tareas);
  },
  filtrarPorEstado(estado) {
    let tareas = this.leerArchivo();
    return tareas.filter((tarea) => tarea.estado === estado);
  },

  actualizar(titulo, estado) {
    // ver lo que tengo
    let tareas = this.leerArchivo();
    //actualizo la primer tareas que coincida con el filtro
    tareas.forEach((tarea) => {
      if (tarea.titulo === titulo) {
        tarea.estado = estado;
      }
    });
    //actualizo el archivo
    this.escribirArchivo(tareas);
    //retorno las tareas actualizadas
    return tareas;
  },
};

module.exports = archivoDeTareas;
