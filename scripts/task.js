if(window.sessionStorage.getItem("task")=="corto"){
  document.getElementById("task").innerText = "Introduce el año actual utilizando el teclado de la siguiente pantalla";
  document.getElementById("taskNumber").innerText = "2024";

}
if(window.sessionStorage.getItem("task")=="largo"){
  document.getElementById("task").innerText = "Introduce la fecha del 29 de febrero de 2024 utilizando el teclado de la siguiente pantalla";
  document.getElementById("taskNumber").innerText = "29022024";
}

if(window.sessionStorage.getItem("task")=="tarjeta"){
  document.getElementById("task").innerText = "Introduce el número de la tarjeta de crédito que se te ha proporcionado utilizando el teclado de la siguiente pantalla";
  document.getElementById("taskNumber").innerText = "4503642091528473";
}

