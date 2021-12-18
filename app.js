let {listarTareas, agregarTarea, eliminarTarea} = require ('./funciones/funcionesDeTareas');
let obj_literal2 = require('./servicios/tareas.json');

console.log(obj_literal2);

console.log(listarTareas(obj_literal2));
eliminarTarea(obj_literal2, 2);
console.log(listarTareas(obj_literal2));


