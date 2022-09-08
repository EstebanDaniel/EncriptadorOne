var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar  = document.querySelector(".desencriptar");
var munieco  = document.querySelector(".contenedor-munieco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo  = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");
var mostrar = document.querySelector(".mostrar")

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
  ocultarAdelante();
  var area = recuperarTexto();
  resultado.textContent = encriptarTexto(area); 
  ocultarParrafo();
}

function desencriptar(){

  ocultarAdelante();
  var area = recuperarTexto();
  resultado.textContent = desencriptarTexto(area);
  ocultarParrafo();

}

function recuperarTexto(){

var area = document.querySelector(".area");
return area.value;

}

function ocultarAdelante(){

munieco.classList.add("ocultar");
h3.classList.add("ocultar");
parrafo.classList.add("ocultar");

}

function mostrarParrafo(){

mostrar.classList.remove("ocultar");

}

function ocultarParrafo(){

  mostrar.classList.add("ocultar");

}

function minusculas(){


}

function encriptarTexto(mensaje) {
 mensaje = mensaje.toLowerCase();
var texto = mensaje;
var textoFinal = "";

for (var i = 0; i < texto.length; i++) {
 
  if(texto[i] == "a"){
    textoFinal = textoFinal + "ai"
  }

  else if(texto[i] == "e"){
    textoFinal = textoFinal + "enter"
    }

  else if(texto[i] == "i"){
    textoFinal = textoFinal + "imes"
    }

  else if(texto[i] == "o"){
    textoFinal = textoFinal + "over"
    }

  else if(texto[i] == "u"){
    textoFinal = textoFinal + "uper"
         
  }

  else {
    textoFinal = textoFinal + texto[i];
  }

}

return textoFinal;
}

function desencriptarTexto(mensaje) {
  mensaje = mensaje.toLowerCase();
  var texto = mensaje;
  var textoFinal = "";
  
  for (var i = 0; i < texto.length; i++) {
   
    if(texto[i] == "a"){
      textoFinal = textoFinal + "a"
      i = i + 1;
    }
  
    else if(texto[i] == "e"){
      textoFinal = textoFinal + "e"
      i = i + 4
      }
  
    else if(texto[i] == "i"){
      textoFinal = textoFinal + "i"
      i = i + 3
      }
  
    else if(texto[i] == "o"){
      textoFinal = textoFinal + "o"
      i = i + 3
      }
  
    else if(texto[i] == "u"){
      textoFinal = textoFinal + "u"
      i = i + 3
    }
  
    else {
      textoFinal = textoFinal + texto[i];
    }
  
  }
  
  return textoFinal;
  }
  
  function recargar(){

    location.reload()

  }

  function copiar(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    mostrarParrafo();
  }