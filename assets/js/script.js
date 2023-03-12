//ejercicio 1
function validar_numero(callback) {
  let input = prompt("Please enter a number:");
  if (isNaN(input)) {
    callback(false, input);
  } else {
    callback(true, input);
  }
}

validar_numero(function(isValid, input) {
  if (isValid) {
    console.log(`You entered a valid number: ${input}`);
  } else {
    console.log(`Invalid input: ${input} is not a number`);
  }
});



//ejercicio 2
function calcular_y_avisar_despues(numero, callback) {
  let sumatoria = 0;
  for (let i = 1; i <= numero; i++) {
      if (i % 2 !== 0) {
          sumatoria += i;
      }
  }

  setTimeout(() => {
      callback(sumatoria);
  }, 5000);
}

function mostrarResultado(resultado) {
  console.log(`El valor de la sumatoria es ${resultado}. Este resultado se obtuvo hace 5 segundos`);
}

calcular_y_avisar_despues(5, mostrarResultado);




//ejercicio 3
function sumatoria(n) {

  let array = [];
  let sum = 0;
  let total = 0;
  for (let i = 1; i <= n; i++) {
  sum = (i * (i + 1)) / 2;
  array.push(sum);
  total = array.reduce((a, b) => a + b, 0);
  }
  return total;
  
  }
  
  const callback = (n) => {
  console.log("El resultado de la sumatoria es igual a : "+ n)
  }
  
  const callbackError = (n) => {
  console.log("Número sobrepasa el limite: " + n)
  }
  
  const calcularAvisarCuando = (numero, callback, callbackError) =>{
  let resultado = sumatoria(numero);
  if(resultado <1000){
  callback(resultado)
  }else{
  callbackError(resultado);
  }
  }
  
  calcularAvisarCuando(5, callback, callbackError);