var dt = new Date();
//document.write("<hr>fecha completa de hoy: " + dt ); 

document.getElementById("current_date").innerHTML = dt ;
document.getElementById("current_year").innerHTML = dt.getFullYear();
document.getElementById("current_month").innerHTML = dt.getMonth()+1;
document.getElementById("current_day").innerHTML = dt.getDate();


function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()
    day=momentoActual.getHours()
    mmonth=momentoActual.getHours()
    year=momentoActual.getHours()

    str_segundo = new String (segundo)
    if (str_segundo.length == 1)
       segundo = "0" + segundo

    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
       minuto = "0" + minuto

    str_hora = new String (hora)
    if (str_hora.length == 1)
       hora = "0" + hora

    horaImprimible = hora + " : " + minuto + " : " + segundo
    document.form_reloj.reloj.value = horaImprimible
    setTimeout("mueveReloj()",1000)
}



//===
// VARIABLES
//===
const DATE_TARGET = new Date('12/31/2022 0:01 AM');
// DOM for render
const SPAN_DAYS = document.querySelector('span#days');
const SPAN_HOURS = document.querySelector('span#hours');
const SPAN_MINUTES = document.querySelector('span#minutes');
const SPAN_SECONDS = document.querySelector('span#seconds');
// Milliseconds for the calculations
const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

//===
// FUNCTIONS
//===

/**
 * Method that updates the countdown and the sample
 */
function updateCountdown() {
    // Calcs
    const NOW = new Date()
    const DURATION = DATE_TARGET - NOW;
    const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
    const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
    // Thanks Pablo Monteserín (https://pablomonteserin.com/cuenta-regresiva/)

    // Render
    SPAN_DAYS.textContent = REMAINING_DAYS;
    SPAN_HOURS.textContent = REMAINING_HOURS;
    SPAN_MINUTES.textContent = REMAINING_MINUTES;
    SPAN_SECONDS.textContent = REMAINING_SECONDS;
}

//===
// INIT
//===
updateCountdown();
// Refresh every second
setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);

// alerta con estilo https://sweetalert.js.org/guides/
swal({
   title: "Bienvenido a este sitio",
   text: "Alerta: Cuenta regresiva a fin de año, lanzamiento de nuestro sitio",
   icon: "warning",
   buttons: true,
   dangerMode: true,
 })
.then((willDelete) => {
  if (willDelete) {
     swal("Esta todo bien este boton daba el mensaje succes ", {
       icon: "success",
     });
   } else {
     swal("este era el else del boton igual sigues ");
   }
 });