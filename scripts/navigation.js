titulos = ["corto", "largo", "tarjeta"]
urls = ["keyboard-ordered.html", "keyboard-random.html", "keyboard-radial.html", "keyboard-radial-random.html", "keyboard-rectangle.html", "keyboard-rectangle-random.html"]

function toEnd() {
  window.location.replace("end.html");
}
function toShortTask(){
  window.location.replace("task.html");
  window.sessionStorage.setItem("task", "corto");
}

function toLongTask(){
  window.location.replace("task.html");
  window.sessionStorage.setItem("task", "largo");
}

function toCardTask(){
  window.location.replace("task.html");
  window.sessionStorage.setItem("changeType", true);
  window.sessionStorage.setItem("task", "tarjeta");
}

function continueTo(){
  i= parseInt(window.sessionStorage.getItem("i"));
  j= parseInt(window.sessionStorage.getItem("j"));
  
  window.sessionStorage.setItem("actual", titulos[j]);
  if(i==5 && window.sessionStorage.getItem("actual")=="tarjeta"){

    window.sessionStorage.setItem("actual", "tarjeta final");
  }
  newurl= urls[i]

  if(window.sessionStorage.getItem("actual")=="tarjeta"){
    window.sessionStorage.setItem("i", i+1);
    window.sessionStorage.setItem("j", 0);
  }else{
    window.sessionStorage.setItem("j", j+1);
  }
  window.location.replace(newurl);
}
