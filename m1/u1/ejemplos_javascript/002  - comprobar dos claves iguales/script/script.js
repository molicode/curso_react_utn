function comprobarClave() {
  var clave1 = document.f1.clave1.value;
  var clave2 = document.f1.clave2.value;

  if (clave1 == clave2) {
    alert(
      "Las dos claves son iguales... \nRealizariamos las acciones del caso positvo"
    );
  } else {
    alert(
      "Las dos claves son distintas... \nRealizariamos las acciones del caso negativo"
    );
  }
}
