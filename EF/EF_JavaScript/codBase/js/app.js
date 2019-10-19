
  var dis, numero, memoria, contador = 0, signAnt = "", resultado, texto = "", signoIgual = "";

  document.getElementsByTagName("body").onload = asignaEvento();

  dis = document.getElementById("display");

  function concatenar(id){
    if ( isFinite(id) == true) {
      contador = ++ contador;
      if (contador <= 8) {
          texto = texto += id;
          if (texto == "") {
            imprimir(id);
          } else {
            imprimir(texto);
          }
      }
    } else{
      var signo = id;
      if (signo == "punto") {
        texto = texto += ".";
        imprimir(texto);
      } else {
        calcular(signo)
        texto = "";
        contador = 0;
      }
    }
  }

  function calcular(signo) {
    if (signo == "on") {
      calculadora.on();
    } else if (signo == "sign") {
      calculadora.neg();
    } else if (signo == "raiz") {
      calculadora.sqr();
    } else if (signo == "mas") {
      calculadora.suma(signo);
      signAnt = signo;
    } else if (signo == "menos") {
      calculadora.resta(signo);
      signAnt = signo;
    } else if (signo == "por") {
      calculadora.multiplicacion(signo);
      signAnt = signo;
    } else if (signo == "dividido") {
      calculadora.division(signo);
      signAnt = signo;
    } else if (signo == "igual") {
      calculadora.igual();
      signAnt = signo;
    }

  }

  function activar() {
    var elemento = event.target
    var id = elemento.id
    dis = document.getElementById("display");
    concatenar(id);
  }

  function eventOnclick() {
    var elemento = event.target
    var id = elemento.id
    var x = document.getElementById(id);
    x.style="-webkit-transform: scale(0.95); transform: scale(0.95);"
  }

  function eventOnBlur() {
    var elemento = event.target
    var id = elemento.id
    var x = document.getElementById(id);
    x.style="-webkit-transform: scale(1); transform: scale(1);"
  }

  function asignaEvento() {
    for (var i = 0; i < document.querySelectorAll(".teclado [class^='tecla']").length; i++) {
      var elemento = document.querySelectorAll(".teclado [class^='tecla']")[i] ;
      var id = elemento.id;
      document.getElementById(id).onclick = activar;
      document.getElementById(id).onmouseover = eventOnclick;
      document.getElementById(id).onmouseleave = eventOnBlur;
    }
  }

  function limpiar() {
    dis = "" ;
    numero = 0;
    memoria = 0;
    contador = 0;
    resultado = 0;
    texto = "";
    id = "";
    elemento= "";
    sign = "";
    signAnt ="";
  }

  function imprimir(valor) {
    var n = valor.toString();

    if (n.length > 8) {
      valor = Number(n.substr(0,8));
      dis.innerHTML = valor;
      valor = 0;
    } else {
      valor = Number(valor)
      dis.innerHTML = valor;
    }
  }
  function ejecuta(signAnt) {
      if (signAnt == "mas") {
        numero = dis.innerHTML;
        numero = Number(numero);
        resultado = resultado + numero;
        dis.innerHTML = "";
      } else if (signAnt == "menos") {
        numero = dis.innerHTML;
        numero = Number(numero);
        if (resultado == 0 & numero != 0) {
          resultado = numero;
          dis.innerHTML = "";
        } else {
          resultado = resultado - numero;
          dis.innerHTML = "";
        }
      } else if (signAnt == "por") {
        numero = dis.innerHTML;
        numero = Number(numero);
        if (resultado == 0 & numero != 0) {
          resultado = numero;
          dis.innerHTML = "";
        } else {
          resultado = resultado * numero;
          dis.innerHTML = "";
        }
      } else if (signAnt == "dividido") {
        numero = dis.innerHTML;
        numero = Number(numero);
        if (resultado != 0 & numero != 0) {
          resultado = resultado / numero;
          dis.innerHTML = "";
        } else {
          resultado = resultado / numero;
          dis.innerHTML = "";
        }
      }
  }

  var calculadora ={
    init: function(){
      imprimir(0);
      limpiar();
    },
    on: function(){
      imprimir(0);
      limpiar();
    },
    neg: function() {
      memoria = dis.innerHTML;
      memoria = memoria * -1;
      imprimir(memoria);
    },
    sqr: function() {
      memoria = dis.innerHTML;
      memoria = Math.sqrt(memoria);
      imprimir(memoria)
    },
    suma: function(signo) {
      if (signAnt != signo & signAnt != "") {
          ejecuta(signAnt);
      } else {
        if (signo == "mas") {
          memoria = dis.innerHTML;
          memoria = Number(memoria);
          if (resultado != 0 & memoria == 0) {
            resultado = resultado;
            dis.innerHTML = "";
          } else {
            resultado = resultado + memoria;
            dis.innerHTML = "";
          }
        }
      }
    },
    resta: function(signo) {
      if (signAnt != signo & signAnt != "") {
          ejecuta(signAnt);
      } else {
        if (signo == "menos") {
          memoria = dis.innerHTML;
          memoria = Number(memoria);
          if (resultado != 0 & memoria == 0) {
            resultado = resultado;
            dis.innerHTML = "";
          } else if (resultado == 0 & memoria != 0) {
            resultado = memoria;
            dis.innerHTML = "";
          } else {
            resultado = resultado - memoria;
            dis.innerHTML = "";
          }
        }
      }
    },
    multiplicacion: function(signo) {
      if (signAnt != signo & signAnt != "") {
          ejecuta(signAnt);
      } else {
        if (signo == "por") {
          memoria = dis.innerHTML;
          memoria = Number(memoria);
          if (resultado == 0 & memoria != 0) {
            resultado = memoria;
            dis.innerHTML = "";
          } else if (resultado != 0 & memoria == 0) {
            resultado = resultado;
          } else {
            resultado = resultado * memoria;
            dis.innerHTML = "";
          }
        }
      }
    },
    division: function(signo) {
      if (signAnt != signo & signAnt != "") {
          ejecuta(signAnt);
      } else {
        if (signo == "dividido") {
          memoria = dis.innerHTML;
          memoria = Number(memoria);
          if (resultado == 0 & memoria != 0) {
            resultado = memoria;
            dis.innerHTML = "";
          } else if (resultado != 0 & memoria == 0) {
            resultado = resultado;
          } else {
            resultado = resultado / memoria;
            dis.innerHTML = "";
          }
        }
      }
    },
    igual: function() {
      if (signAnt == "mas") {
        numero = dis.innerHTML;
        numero = Number(numero);
        resultado = resultado + numero;
        imprimir(resultado);
        signoIgual = signAnt;
      } else if (signAnt == "menos") {
        numero = dis.innerHTML;
        numero = Number(numero);
        resultado = resultado - numero;
        imprimir(resultado);
        signoIgual = signAnt;
      } else if (signAnt == "por") {
        numero = dis.innerHTML;
        numero = Number(numero);
        signoIgual = signAnt;
        resultado = resultado * numero;
        imprimir(resultado);
        signoIgual = signAnt;
      } else if (signAnt == "dividido") {
        numero = dis.innerHTML;
        numero = Number(numero);
        resultado = resultado / numero;
        imprimir(resultado);
        signoIgual = signAnt;
      } else {
        if (signAnt == "igual") {
          if (signoIgual == "mas") {
            resultado = resultado + numero;
            imprimir(resultado);
          } else if (signoIgual == "menos") {
            resultado = resultado - numero;
            imprimir(resultado);
          } else if (signoIgual == "por") {
            resultado = resultado * numero;
            imprimir(resultado);
          } else if (signoIgual == "dividido") {
            resultado = resultado / numero;
            imprimir(resultado);
          }
        } else {
          memoria = resultado;
          resultado = 0;
          numero = 0;
        }
      }
    }
  }

  calculadora.init();
