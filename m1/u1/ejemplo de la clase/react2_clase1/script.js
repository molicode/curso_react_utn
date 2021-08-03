function registrarse(){
    var nombre = document.registro.nombre.value;
    var apellido;
    apellido = document.getElementById("apellido_id").value
    var edad = document.registro.edad.value
    var email = document.getElementById("email_id").value
    var password = document.getElementById("password_id").value
    if(1=="1"){
        document.getElementById("error_nombre").innerHTML = "Debe completar el nombre"
    }
    console.log(nombre,apellido,edad,email,password)
}
function handleChange(){
    
    var option = document.getElementById("curso_id").value
    console.log(option)
}
/*function pruebaFuncion(){

}
var pruebaFuncion = function(){

}
pruebaFuncion()*/