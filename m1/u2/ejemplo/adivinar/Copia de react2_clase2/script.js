const adivinarThen = ()=>{
    const numeroUsuario = document.getElementById("numero").value
    //console.log(numeroUsuario, numeroUsuario*1+1)
    getNumero()
    .then(numero=>{
        console.log(numero)
        if(numeroUsuario==numero){
            document.getElementById("mensaje").innerHTML = `Ganaste! el numero es ${numero}`
        }else if(numeroUsuario<numero){
            document.getElementById("mensaje").innerHTML = "Introduci un numero mayor"
        }else{
            document.getElementById("mensaje").innerHTML = "Introduci un numero menor"
        }
    })
    .catch(e=>document.getElementById("mensaje").innerHTML=e)
    
}
const adivinar = async ()=>{
    const numeroUsuario = document.getElementById("numero").value
    //console.log(numeroUsuario, numeroUsuario*1+1)
    const {numero} = await getNumero()

    console.log(numero)
    if(numeroUsuario==numero){
        document.getElementById("mensaje").innerHTML = `Ganaste! el numero es ${numero}`
    }else if(numeroUsuario<numero){
        document.getElementById("mensaje").innerHTML = "Introduci un numero mayor"
    }else{
        document.getElementById("mensaje").innerHTML = "Introduci un numero menor"
    }
    
}
const getNumero = ()=>{
    return new Promise((resolve,reject)=>{
        if(1){
            resolve({
                numero:5,
                otroDato:""
            })
        }else{
            reject("Hubo error ")
        }
    })
}