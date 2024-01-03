const MES_CUMPLEANOS = 0; 
const DIA_CUMPLEANOS = 18; 

setInterval(function () {
    
    let fechaActual = new Date();
    let fechaCumpleanos = new Date(fechaActual.getFullYear(), MES_CUMPLEANOS, DIA_CUMPLEANOS);

    
    if (fechaActual > fechaCumpleanos) {
        fechaCumpleanos.setFullYear(fechaCumpleanos.getFullYear() + 1);
    }

    
    let diff = fechaCumpleanos - fechaActual;

    let dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    let horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diff % (1000 * 60)) / 1000);

    
    document.getElementById('contador').innerHTML = dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";

    
    let mes = fechaActual.getMonth();
    if (mes >= 9 && mes < 11) {
        
        document.body.style.backgroundImage = "url('recursos/otoño.jpeg')";
    } else if (mes >= 11 || mes < 2) {
        
        document.body.style.backgroundImage = "url('recursos/invierno.jpeg')";
    } else if (mes >= 2 && mes < 5) {
        
        document.body.style.backgroundImage = "url('recursos/primavera.jpeg')";
    } else {
        
        document.body.style.backgroundImage = "url('recursos/verano.jpeg')";
    }

    
    if (fechaActual.getDate() === fechaCumpleanos.getDate() && fechaActual.getMonth() === fechaCumpleanos.getMonth()) {
        
        document.getElementById('contador').style.display = "none";
        
        document.getElementById('mensaje').innerHTML = "¡Felicidades!";
        mensaje.style.fontSize = "200px"; 
        mensaje.style.color = "green"; 
        document.body.style.backgroundImage = "url('recursos/cumpleaños.jpeg')";
    }
}, 1000);