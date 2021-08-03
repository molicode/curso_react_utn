function validarEnteroEnCampo(identificadorDelCampo) {
  var field = document.getElementById(identificadorDelCampo);
  var valueInt = parseInt(field.value);

  if (!Number.isInteger(valueInt)) {
    alert("No es un entero");
  } else {
    field.value = valueInt;
  }
}

/*
    parseInt: Parsea el valor que pasamos como parámetro a un entero. 
    Es decir, js por ejemplo tomara los valores que introducimos en un input 
    como string, aplicando parseInt transforma los mismos a un tipo de dato 
    Number.

    Number.isInteger: Retorna true si el valor que pasamos como parámetro 
    es un entero y false si no lo es.
*/
