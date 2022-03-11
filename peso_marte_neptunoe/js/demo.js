// var weight = document.getElementById('weight')
// var neptuneWeight = document.getElementById('weightNeptune')
// var marsWeight = document.getElementById('weightMars')

// weight.addEventListener('keyup', function(e){
//     neptuneWeight.innerHTML = planetWeight(weight.value, 'neptune') + 'kg'
//     marsWeight.innerHTML = planetWeight(weight.value, 'mars') + 'kg'
// })

// function planetWeight(weight, planet){
//     var neptuneG = 11.15
//     var earthG = 9.9
//     var marsG = 3.71
//     return calculate(weight, planet)
    
    
//     function calculate(weight, planet){
//         if (planet === 'neptune') return ((parseInt(weight) / earthG) * neptuneG).toFixed(2)
//         if (planet === 'mars') return ((parseInt(weight) / earthG) * marsG).toFixed(2)
//     }
// }

'use strict'

function Calcular() {

    var weight = document.getElementById('weight').value;
    const neptuneG = 11.15
    const earthG = 9.81
    const marsG = 3.71

    var testneptuneWeight = ((weight / earthG) * neptuneG).toFixed(2);
    var testmarsWeight = ((weight / earthG) * marsG).toFixed(2);
  
    document.getElementById('weightNeptune').innerHTML = testneptuneWeight + " KG";
    document.getElementById('weightMars').innerHTML = testmarsWeight + " KG";

}

