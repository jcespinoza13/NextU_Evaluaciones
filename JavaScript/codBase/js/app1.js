
  function reducir(elemento){
  elemento.style.width = "20%";
  elemento.style.height = "60px";
  }
  function reducir2(elemento){
  elemento.style.width = "26%";
  elemento.style.height = "60px";
  }

  function aumentar(elemento){
  elemento.style.width = "22%";
  elemento.style.height = "62.91px";
  }
  function aumentar2(elemento){
  elemento.style.width = "29%";
  elemento.style.height = "62.91px";
  }

  // function operacion(valor, signo) {
  //   if (signo == ".") {
  //     ;
  //   }
  // }

  document.addEventListener("click", function(){
    var elemento = event.target
    reducir(elemento);
  });

document.addEventListener("onfocusout", function(){
  var elemento = event.target
  aumetar(elemento);
});

  document.addEventListener("click", function(){
  var elemento = event.target
  var nombre = elemento.id
  var dis = document.getElementById("display")
  var valor = dis.innerHTML
  var n1 = valor.valueOf();
  var n2 = nombre.valueOf();

  // Define # y signos
  if ( isFinite(n2) == true) {

    if ( n2 > 3) {
      // reducir(elemento);
      if ( n1 == 0) {
        dis.innerHTML = nombre;
      } else {
        if (opr == ".") {
          dis.innerHTML = dis.innerHTML += ".";
          dis.innerHTML = dis.innerHTML += nombre;
        } else {
          dis.innerHTML = dis.innerHTML += nombre;
        }
      }
      // aumentar(elemento)
    } else {
      // reducir2(elemento);
      if ( n1 == 0) {
        dis.innerHTML = nombre;
      } else {
        if (opr == ".") {
          dis.innerHTML = dis.innerHTML += ".";
          dis.innerHTML = dis.innerHTML += nombre;
        } else {
          dis.innerHTML = dis.innerHTML += nombre;
        }
      }
      // aumertar2(elemento)
    }
  } else {
    if (nombre = "punto") {
      var opr = "."
      dis.innerHTML = dis.innerHTML;
    }


    }

  });




  // var calculadora = {
  //   init: function(){
  //     var nombre = 0;
  //   },
  //   digitos: function(){
  //
  //   },
  //   reducir: function(elemento){
  //     elemento.style.width = "20%";
  //     elemento.style.height = "60px";
  //   }
  // }
  //
  // calculadora.init();




  // document.getElementById('boton-perfil').addEventListener("click", function(){
  //   Paciente.imprimirDatos();
  // })

//   num0.addEventListener("click", function(){
//     reducir()
//   })
//
// }

// document.getElementById('boton-receta1').addEventListener('click', function(){
//   var ingredientes= ['Claras de huevo', 'Azucar Blanca', 'Leche Condensada', 'Gelatina sin sabor', 'Limones'];
//   var unidadesClaraDeHuevo = 5;
//   var gramosAzucar = 150;
//   var gramosLecheCondensada = 200;
//   var sobresGelatina = 1;
//   var unidadesLimon = 4;
//
//   console.log("Adicionar las "+unidadesClaraDeHuevo+" "+ingredientes[0]+" en un Bol y batir con los "+gramosAzucar+" gramos de "+ingredientes[1]);
//
//   console.log("Adicionar los "+gramosLecheCondensada+" gramos de "+ingredientes[2]+" y batir bien");
//
//   console.log("Adicionar el zumo de "+unidadesLimon+" "+ingredientes[4]+" y "+sobresGelatina+" sobre de "+ingredientes[3]+" hidratada en agua tibia");
//
//   console.log("Deposita la mezcla en moldes individaules y refrigera");
// })

// function reducirTamañoBotonAccion(elemento){
//   elemento.style.width = "18%";
// }
// function aumentarTamañoBotonAccion(elemento){
//   elemento.style.width = "20%";
// }
