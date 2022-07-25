let terminar;
let nombre;
let arma;
let enemigo;
let resultado;
let deNuevo = false;

function iniciarApp () {
    nombre = prompt ("Escribe el nombre de tu personaje:");
    alert (nombre + ", es el nombre seleccionado.");
    alert (nombre + " decide comenzar su aventura.");

    do {

        console.log("En el simulador");
        if (deNuevo = false){
            alert (nombre + " debes elegir una arma para pelear.");
        }

        let validar = false;

        do{
            arma = prompt ("Escribe 'Espada' - 'Hacha' - 'Lanza':");
            switch(arma)
            {
              case "Espada":
                alert(nombre + " levanta la espada.");
                validar = true;
                break;
              case "Hacha":
                alert(nombre + " levanta una hacha.");
                validar = true;
                break;
              case "Lanza":
                alert(nombre + " levanta una lanza.");
                validar = true;
                break;
              default:
                alert(" no es una selección válida.");
                break;
            }//fin personaje
        } while (validar != true) //valida que se elija un arma
         
        alert (nombre + " empieza a explorar.");

        generarEnemigo ();
        
       switch(enemigo)
        {
          case "Espada":
            alert("Ha aparecido un espadachín y te reta.");
            break;
          case "Hacha":
            alert("Ha aparecido un bandido y te ataca.");
            break;
          case "Lanza":
            alert("Ha aparecido un soldado y te desafía.");
            break;
          default:
            alert("error");
            break;
        }//fin switch enemigo
        
        //Duelo
        alert ("Comienza el combate.")
        alert (arma + " vs. " + enemigo + ".");
        generarCombate (); //control del flujo
        alert (resultado);

        //Validación si salir del simulador o repetir
        terminar = prompt("Escribe 'ESC' para salir de la aventura");
        if (terminar!="ESC")
        {
            alert (nombre + " decide seguir explorando.");
            alert ("Se encuentra en una tienda de objetos.");
            alert (nombre + " elige una arma nueva.");
            deNuevo = true;
        }
        else {
            alert ("Has terminado la aventura.")
        }
    } while (terminar!= "ESC")//fin do while

    console.log("Salió del simulador");
}

function generarEnemigo () {
    const numeroRandom = Math.floor(Math.random() * 3 + 1);//Genera un número del 1 al 3
    console.log (numeroRandom);
    if (numeroRandom ==1){
        enemigo = "Espada";
        console.log (enemigo);
    }
    else if (numeroRandom ==2)
    {
        enemigo = "Hacha";
        console.log (enemigo);
    }
    else {
        enemigo = "Lanza";
        console.log (enemigo);
    }
}

function generarCombate ()
{
    if (arma == enemigo){
        resultado = '¡Es un empate!';
    }
    else if (arma == "Espada" && enemigo == "Lanza" ){
        resultado = '¡Has perdido contra la lanza!';
    }
    else if (arma == "Espada" && enemigo == "Hacha" ){
        resultado = '¡Has ganado contra la hacha!';
    }
    else if (arma == "Hacha" && enemigo == "Espada" ){
        resultado = '¡Has perdido contra la espada!';
    }
    else if (arma == "Hacha" && enemigo == "Lanza" ){
        resultado = '¡Has ganado contra la lanza!';
    }
    else if (arma == "Lanza" && enemigo == "Hacha" ){
        resultado = '¡Has perdido contra la hacha!';
    }
    else if (arma == "Lanza" && enemigo == "Espada" ){
        resultado = '¡Has ganado contra la espada!';
    }   
    else {
        console.log ("error");
    }   
    console.log (resultado);  
}