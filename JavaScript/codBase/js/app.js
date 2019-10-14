
  function reducir(elemento, id){
    if (id === "0" || id === "1" || id === "2" || id === "3" || id === "punto" || id === "igual" ) {
      elemento.style.width = "23%";
      elemento.style.height = "55px";

    } else if (id === "mas") {
      elemento.style.width = "80%";
      elemento.style.height = "90%";
    } else{
      elemento.style.width = "18%";
      elemento.style.height = "55px";
    }
  }

  function aumentar(elemento, id){
    if (id === "0" || id === "1" || id === "2" || id === "3" || id === "punto" || id === "igual" ) {
      elemento.style.width = "29%";
      elemento.style.height = "62.91px";

    } else if (id === "mas") {
      elemento.style.width = "90%";
      elemento.style.height = "100%";
    } else{
      elemento.style.width = "22%";
      elemento.style.height = "62.91px";
    }
  }

  // function operacion(valor, signo) {
  //   if (signo == ".") {
  //     ;
  //   }
  // }

  var dis, numero, memoria, contador, sig, resultado
  var texto = "";
  dis = document.getElementById("display");

  function concatenar(id){
    if ( isFinite(id) == true) {
      contador = ++ contador;
      texto = texto += id;
      if (texto == "") {
        dis.innerHTML = id;
      } else {
        dis.innerHTML = texto;
      }
    } else{
      var signo = id;
      calcular(signo)
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
      calculadora.suma();
    } else if (signo == "menos") {
      calculadora.resta();
    } else if (signo == "por") {
      calculadora.multiplicacion();
    } else if (signo == "dividido") {
      calculadora.division();
    } else if (signo == "igual") {
      calculadora.igual();
    }

  }

  document.addEventListener("click", function(){
    var elemento = event.target
    var id = elemento.id
    reducir(elemento, id);
    dis = document.getElementById("display");
    concatenar(id);
    setTimeout(aumentar(elemento, id), 1000);
  });

  function limpiar() {
    dis = "" ;
    numero = 0;
    memoria = 0;
    contador = 0;
    resultado = 0;
    texto = "";
    id = "";
  }

  var calculadora ={
    init: function(){
      dis.innerHTML = 0;
      limpiar();
    },
    on: function(){
      dis.innerHTML = 0;
      limpiar();
    },
    neg: function() {
      memoria = dis.innerHTML;
      resultado = memoria * -1;
      memoria = resultado;
      dis.innerHTML = resultado;
    },
    sqr: function() {
      memoria = dis.innerHTML;
      dis.innerHTML = Math.sqrt(memoria);
    },
    suma: function() {
      numero = dis.innerHTML;
      numero = Number(numero);
      if (memoria != 0) {
        resultado = memoria + numero;
        memoria = resultado;
        dis.innerHTML = resultado;
        texto = "";
        numero = 0;
      } else {
        numero = dis.innerHTML;
        memoria = Number(numero);
        dis.innerHTML = 0;
        texto = "";
        numero = 0;
      }
    },
    resta: function() {
      memoria = dis.innerHTML;
      dis.innerHTML = 0;
    },
    multiplicacion: function() {
      memoria = dis.innerHTML;
      dis.innerHTML = 0;
    },
    division: function() {
      memoria = dis.innerHTML;
      dis.innerHTML = 0;
    }
  }

  calculadora.init();

  // document.addEventListener("click", function(){
  // var elemento = event.target
  // var nombre = elemento.id
  // var dis = document.getElementById("display")
  // var valor = dis.innerHTML
  // var n1 = valor.valueOf();
  // var n2 = nombre.valueOf();

  // // Define # y signos
  // if ( isFinite(n2) == true) {
  //
  //   if ( n2 > 3) {
  //     // reducir(elemento);
  //     if ( n1 == 0) {
  //       dis.innerHTML = nombre;
  //     } else {
  //       if (opr == ".") {
  //         dis.innerHTML = dis.innerHTML += ".";
  //         dis.innerHTML = dis.innerHTML += nombre;
  //       } else {
  //         dis.innerHTML = dis.innerHTML += nombre;
  //       }
  //     }
  //     // aumentar(elemento)
  //   } else {
  //     // reducir2(elemento);
  //     if ( n1 == 0) {
  //       dis.innerHTML = nombre;
  //     } else {
  //       if (opr == ".") {
  //         dis.innerHTML = dis.innerHTML += ".";
  //         dis.innerHTML = dis.innerHTML += nombre;
  //       } else {
  //         dis.innerHTML = dis.innerHTML += nombre;
  //       }
  //     }
  //     // aumertar2(elemento)
  //   }
  // } else {
  //   if (nombre = "punto") {
  //     var opr = "."
  //     dis.innerHTML = dis.innerHTML;
  //   }
  //
  //
  //   }

  // });
