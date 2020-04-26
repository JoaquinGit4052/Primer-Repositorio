const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function(arrayDeTareas){
        let listaParseada = this.traerArrayDeTareas();
        listaParseada.push(tarea)
        let listaComoJSON = JSON.stringify(listaParseada);
        fs.writeFileSync('tareas.json', listaComoJSON);
    },
    guardarTarea: function(tarea) {
        let listadoConvertido = this.leerJSON();
        listadoConvertido.push(tarea);
        this.escribirJSON 
    },
    leerPorEstado: function(estado){
        let listadoConvertido = this.leerJSON()
        listadoConvertido.filter(function(elemento){
            return elemento.estado = estado
        })
    }
}


module.exports = archivoTareas;