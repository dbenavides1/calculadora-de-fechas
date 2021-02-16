moment.locale('es');

var fecha1 = document.getElementById("fecha1"),
    fecha2 = document.getElementById("fecha2"),
    btnCalcular1 = document.getElementById("btn-calcular1"),
    fechaIni = document.getElementById("fecha-ini"),
    anos = document.getElementById("anos"),
    meses = document.getElementById("meses"),
    dias = document.getElementById("dias"),
    btnCalcular2 = document.getElementById("btn-calcular2"),
    formato = 'LL';

function calcularDifFechas() {
    let fechaUno = moment(fecha1.value),
        fechaDos = moment(fecha2.value),
        diasDif = fechaDos.diff(fechaUno, 'days'),
        mesesDif = fechaDos.diff(fechaUno, 'months'),
        anosDif = fechaDos.diff(fechaUno, 'years'),
        moduloMeses = mesesDif % 12,
        diasRestantes = fechaUno.add(anosDif, "years");

    diasRestantes = diasRestantes.add(moduloMeses, "months");
    diasRestantes = fechaDos.diff(diasRestantes, 'days');

    alert("Días totales: " + diasDif + "\nEn Formato: " + anosDif + " años " + moduloMeses + " meses " + diasRestantes + " días");
}

btnCalcular1.addEventListener("click", function(){
    calcularDifFechas();
});

function calcularFechaMasTiempo(){
    let fechaInicial = moment(fechaIni.value),
        fechaFin = fechaInicial.clone().add(anos.value, 'years');
    fechaFin = fechaFin.add(meses.value, 'months');
    fechaFin = fechaFin.add(dias.value, 'days');

    alert("Fecha Resultante: " + fechaFin.format(formato));
}

btnCalcular2.addEventListener("click", function(){
    calcularFechaMasTiempo();
});