// **********     Curso JavaScript: 10. Funciones  ********** 

/*
Una función es un bloque de código, autocontenido, que se puede definir una vez y ejecutar en cualquier momento. 
Opcionalmente, una función puede aceptar parámetros y devolver un valor.

Las funciones en JavaScript son objetos, un tipo especial de objetos:

Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden pasarse como argumentos y usarse como un valor de retorno.
*/

var demos = 0

//Declaración de función
function estoEsUnaFuncion() {
    let demo = "3" * 3;
    var demos = 0;

    {
        let demo = "Pop";
        console.log("Variable Música dentro del Bloque", demo);
    }

    console.log(demo)
    console.log(demos)
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

console.log(demos);

//Invocación de función
estoEsUnaFuncion();
