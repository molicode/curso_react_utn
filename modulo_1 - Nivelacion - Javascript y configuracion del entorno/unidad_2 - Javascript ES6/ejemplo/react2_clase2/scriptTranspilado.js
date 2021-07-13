"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var registrarseBkp = function registrarseBkp() {
    var nombre = getNombre(function () {});
    console.log("nombre", nombre);
    var apellido = void 0;
    apellido = document.getElementById("apellido_id").value;

    console.log(apellido);

    var edad = document.registro.edad.value;
    var email = document.getElementById("email_id").value;
    var password = document.getElementById("password_id").value;
    if (1 == "1") {
        document.getElementById("error_nombre").innerHTML = "Debe completar el nombre";
    }
    console.log(nombre, apellido, edad, email, password);
    document.getElementById("mensaje").innerHTML = "Gracias " + nombre + " \n    " + apellido + "\n    por registarse";
};
var registrarse = async function registrarse() {
    //Spread
    /*const alumno = getAlumno("react");
    
    const alumnoDocumentacion = {...alumno,...{documento:23122}}
    console.log("alumnoDocumentacion",alumnoDocumentacion)*/
    //Deconstructor
    var _getAlumno = getAlumno("react"),
        nombre = _getAlumno.nombre,
        apellido = _getAlumno.apellido,
        edad = _getAlumno.edad,
        cursos = _getAlumno.cursos;

    console.log(nombre, apellido, edad, cursos);

    var _cursos = _slicedToArray(cursos, 2),
        curso1 = _cursos[0],
        curso2 = _cursos[1];
    //console.log([...cursos,...["a"]])


    console.log(curso1, curso2);

    //Promise
    getAlumnoPromise().then(function (alumnoPromise) {
        console.log("Alumno Promise", alumnoPromise);
    }).catch(function (e) {
        return console.log("Error", e);
    });
    console.log("despues del promise");
    //Async / await
    try {
        var alumnoPromise = await getAlumnoPromise();
        console.log("async / await", alumnoPromise);
    } catch (e) {
        console.log(e);
    }

    /*document.getElementById("mensaje").innerHTML = `Gracias ${nombre} 
    ${apellido}
    por registarse`*/
};
/*const getNombre = ()=>{
    return document.registro.nombre.value;
}*/
var getNombre = function getNombre() {
    return document.registro.nombre.value;
};
var getAlumno = function getAlumno() {
    var cursoActual = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "php";

    console.log("cursoActual", cursoActual);
    return {
        nombre: document.registro.nombre.value,
        apellido: document.getElementById("apellido_id").value,
        edad: document.registro.edad.value,
        cursos: ["php", "js"]
    };
};
var getAlumnoPromise = function getAlumnoPromise() {

    return new Promise(function (resolve, reject) {
        if (1) {
            resolve({
                nombre: document.registro.nombre.value,
                apellido: document.getElementById("apellido_id").value,
                edad: document.registro.edad.value,
                cursos: ["php", "js"]
            });
        } else {
            reject("Hubo error");
        }
    });
};
//const getNombre = nombreAnterior=>document.registro.nombre.value
/*function registrarse(){
    const nombre = document.registro.nombre.value;
    {
        let apellido;
        apellido = document.getElementById("apellido_id").value
    }
    console.log(apellido)
    
    var edad = document.registro.edad.value
    var email = document.getElementById("email_id").value
    var password = document.getElementById("password_id").value
    if(1=="1"){
        document.getElementById("error_nombre").innerHTML = "Debe completar el nombre"
    }
    console.log(nombre,apellido,edad,email,password)
    document.getElementById("mensaje").innerHTML = `Gracias ${nombre} 
    ${apellido}
    por registarse`

    

}*/
function handleChange() {

    var option = document.getElementById("curso_id").value;
    console.log(option);
}
function frutas() {
    var frutas = new Array();
    frutas[0] = "manzana";
    frutas[1] = "banana";
    console.log(frutas, frutas[0]);
    var frutasRapido = ["manzana", "banana"];
    console.log(frutasRapido, frutasRapido[0]);
    for (var i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
    }
}

frutas();
