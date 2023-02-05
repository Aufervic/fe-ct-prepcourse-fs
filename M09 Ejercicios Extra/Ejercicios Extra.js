/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var keys = Object.keys(objeto);
   var arreglo = [];
   for(var i= 0; i < keys.length; i++){
      arreglo.push([keys[i], objeto[keys[i]]]);
   }
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var letras = string.split("");
   letras.sort();
   var letra = letras[0];
   var cantidad = 1;
   var objeto = {};
   for(var i = 1; i < letras.length; i++){
      if(letra === letras[i]){
         cantidad++;
      }else{
         letra = letras[i];
         cantidad = 1;
      }
      objeto[letra] = cantidad;
   }

   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var letras = string.split("");
   var mayus = [];
   var minus = []
   for(var i = 0; i < letras.length; i++){
      if(letras[i]=== letras[i].toUpperCase()){
         mayus.push(letras[i]);
      }else{
         minus.push(letras[i]);
      }
   }

   return mayus.join("")+minus.join("");
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(" ");
   var inverso = [];
   for(var i = 0; i < palabras.length; i++){
      var letras = palabras[i];
      var fraseinversa = "";
      for(var j = letras.length -1; j >= 0; i--){
         fraseinversa += letras[j];
      }
      inverso.push(fraseinversa);
   }
   return inverso.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var cadnumero = ""+numero;
   var digitos = cadnumero.split("");
   if(cadnumero === digitos.reverse().join(""))
      return "Es capicua";
   else
      return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var  letras = ["a", "b", "c"];
   var cadena = "";
   var newcad = string;
   for(var i = 0; i < letras.length; i++){
      do{
         cadena = newcad;
         newcad = cadena.replace(letras[i], "");
      }while(newcad !== cadena);
   }
   return newcad;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   let resultado = []; 
   arrayNumeros = arrayOfStrings.map(function (elemento) {
      return elemento.length;
   }); 

   let min = arrayNumeros.reduce(function (ac, el) {
      return Math.min(ac, el);
   });
   for (let i = 0; i < arrayOfStrings.length; i++) {
      if (min === arrayOfStrings[i].length) {
      resultado.push(arrayOfStrings[i]);
      } 
      for (let j = 0; j < arrayNumeros.length; j++) {
      if (min === arrayNumeros[j]) {
         arrayNumeros.splice(j, 1);
      }
      }
   } 

   return resultado;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var arrinterseccion = [];
   for(var i = 0; i < array1.length; i++){
      for(var j = 0;j < array2.length; j++){
         if(array1[i] === array2[j])
            arrinterseccion.push(array1[i]);
      }
   }
   return arrinterseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
