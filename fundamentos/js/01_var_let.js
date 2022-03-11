var hola = "Hola Mundo"; //variable de ambito global = Escope Global
let hello = "Hello World"; //Variable de ambito de bloque = Escope de Bloque
//console.log(hola);
//console.log(hello);
//console.log(window);
//console.log(window.hola);
//console.log(window.hello);

// Ambito de bloque //

console.log("****************var*****************");
var musica = 2;
console.log("Variable Música antes del Bloque", musica);

{
    var musica = "Pop";
    console.log("Variable Música dentro del Bloque", musica);
}

console.log("Variable Música dentro del Bloque", musica);

/*
{
    var musica = 1;
    console.log("Variable Música dentro del Bloque", musica);
}

var musica = "Chicha";
console.log("Variable Música después del Bloque", musica);
*/

console.log("****************let*****************");
let musica2 = "Rock";
let musica3 = 3;
console.log("Variable Música antes del Bloque", musica2);
console.log("Variable Música antes del Bloque", musica3);

{
    let musica4 = "Pop";
    console.log("Variable Música dentro del Bloque", musica4);
}

// console.log("Variable Música dentro del Bloque", musica4);

{
    let musica2 = 1;
    console.log("Variable Música dentro del Bloque", musica2);
}

console.log("Variable Música después del Bloque", musica2);
console.log("Variable Música después del Bloque", musica3);


