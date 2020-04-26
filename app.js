let archivoTareas = require('./tareas');

let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leerJSON();
        tareas.forEach(function(elemento, i) {
            console.log(`${i + 1}. ${elemento.titulo} - ${elemento.estado}`)
        })
        console.log()
        break;

    case 'tarea':
        let tituloObtenido = process.argv[3]
        let nuevaTarea = {
            titulo: tituloObtenido,
            estado: 'pendiente'
        };
        archivoTareas.guardarTarea(nuevaTarea);
        console.log("La tarea fue creada con éxito")
        break;
    
    case 'filtrar':
        let filtradoPorEstado = process.argv[3]
        let estados = archivoTareas.leerPorEstado(filtradoPorEstado)
        estados.forEach(function(elemento){
            return elemento
        })


    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar');
        break;
}
