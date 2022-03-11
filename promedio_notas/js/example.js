'use strict'

function Calcular() {
    var vr1 = document.getElementById('t1').value;
    var vr2 = document.getElementById('t2').value;
    var vr3 = document.getElementById('t3').value;
    var p = ((parseFloat(vr1) + parseFloat(vr2) + parseFloat(vr3)) / 3).toFixed(2);
    var s = parseFloat(vr1) + parseFloat(vr2) + parseFloat(vr3)

    document.getElementById('promedio').innerHTML = p;
    document.getElementById('sumatoria').innerHTML = s;

}