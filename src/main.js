let time = document.getElementById ("timer");
let hora = 0;
let minuto = 0;
let segundos = 0;
let Stop = true;
let reset = false;

function StartTime (){
    if (Stop == true){
        Stop = false;
        CicloTempo();
    }
}

function StopTime (){
    if (Stop == false){
        Stop = true;
    
    }
}

function ResetTime(){
    time.innerHTML = "00:00:00";
     hora = 0;
     minuto = 0;
     segundos = 0;
}

function CicloTempo (){
 
    if(Stop == false){
       
        hora = parseInt(hora);
        minuto =parseInt(minuto);
        segundos = parseInt(segundos);


        segundos += 1;

        if(segundos == 60){
            minuto += 1;
            segundos = 0;
        }

        if (minuto == 60){
            hora += 1;
            minuto = 0;
            segundos = 0;
        }
        if (segundos< 10){
            segundos = "0" + segundos;
        }
        if (minuto< 10){
            minuto = "0" + minuto;
        }
        if (hora < 10){
            hora = "0" + hora;
        }

        time.innerHTML = hora + ":" + minuto + ":" + segundos ;
        setTimeout("CicloTempo()", 1000);
        
    }

    
}