const registrarseBkp = ()=>{
    const nombre = getNombre(()=>{
        
    });
    console.log("nombre",nombre)
    let apellido;
    apellido = document.getElementById("apellido_id").value
    
    console.log(apellido)
    
    const edad = document.registro.edad.value
    const email = document.getElementById("email_id").value
    const password = document.getElementById("password_id").value
    if(1=="1"){
        document.getElementById("error_nombre").innerHTML = "Debe completar el nombre"
    }
    console.log(nombre,apellido,edad,email,password)
    document.getElementById("mensaje").innerHTML = `Gracias ${nombre} 
    ${apellido}
    por registarse`
}
const registrarse = async ()=>{
    //Spread
    /*const alumno = getAlumno("react");
    
    const alumnoDocumentacion = {...alumno,...{documento:23122}}
    console.log("alumnoDocumentacion",alumnoDocumentacion)*/
    //Deconstructor
    const {nombre,apellido,edad,cursos} = getAlumno("react");
    console.log(nombre,apellido,edad,cursos)
    const [curso1,curso2] = cursos
    //console.log([...cursos,...["a"]])
    console.log(curso1,curso2)

    //Promise
    getAlumnoPromise()
    .then(alumnoPromise=>{
        console.log("Alumno Promise",alumnoPromise)
    })
    .catch(e=>console.log("Error",e))
    console.log("despues del promise")
    //Async / await
    try{
        const alumnoPromise = await getAlumnoPromise()
        console.log("async / await",alumnoPromise)
    }catch(e){
        console.log(e)
    }
    


    /*document.getElementById("mensaje").innerHTML = `Gracias ${nombre} 
    ${apellido}
    por registarse`*/
}
/*const getNombre = ()=>{
    return document.registro.nombre.value;
}*/
const getNombre = ()=>document.registro.nombre.value
const getAlumno = (cursoActual="php")=>{
    console.log("cursoActual",cursoActual)
    return {
        nombre:document.registro.nombre.value,
        apellido:document.getElementById("apellido_id").value,
        edad:document.registro.edad.value,
        cursos:["php","js"]
    }
}
const getAlumnoPromise = ()=>{

    return new Promise((resolve,reject)=>{
        if(1){
            resolve({
                nombre:document.registro.nombre.value,
                apellido:document.getElementById("apellido_id").value,
                edad:document.registro.edad.value,
                cursos:["php","js"]
            })
        }else{
            reject("Hubo error")
        }
    })
    
    
    
}
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
function handleChange(){
    
    var option = document.getElementById("curso_id").value
    console.log(option)
}
function frutas(){
    var frutas = new Array();
    frutas[0]="manzana";
    frutas[1]="banana"
    console.log(frutas,frutas[0])
    var frutasRapido = ["manzana","banana"]
    console.log(frutasRapido,frutasRapido[0])
    for(var i=0;i<frutas.length;i++){
        console.log(frutas[i])
    }
}

frutas()