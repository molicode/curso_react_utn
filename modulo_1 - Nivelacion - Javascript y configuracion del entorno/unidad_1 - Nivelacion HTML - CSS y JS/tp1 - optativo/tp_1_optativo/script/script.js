function validateIdentityDocument() {
  const EX_REGULAR_DNI = /^\d{8}(?:[-\s]\d{4})?$/;
  var dni = document.getElementById("dni_id").value;

  if (EX_REGULAR_DNI.test(dni) == true) {
    document.getElementById("error_dni").innerHTML = "";
  } else {
    document.getElementById("error_dni").innerHTML =
      "DNI erroneo, formato no válido";
  }
}

function getInsuranceType() {
  var insuranceType = document.getElementById("insurance_type_id");
  switch (insuranceType.value) {
    case "1":
      document.getElementById("insuranceTypeSelected").innerHTML = "$ 500";
      break;
    case "2":
      document.getElementById("insuranceTypeSelected").innerHTML = "$ 1000";
      break;
    default:
      document.getElementById("insuranceTypeSelected").innerHTML = "$ 1500";
      break;
  }
}

getInsuranceType();
