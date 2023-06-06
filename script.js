// simulazione lancio dei dadi computer
let lancioComputerDadoUno = Math.floor(Math.random()*6) + 1; 
let lancioComputerDadoDue = Math.floor(Math.random()*6) + 1; 
let totaleComputer = lancioComputerDadoUno + lancioComputerDadoDue;

// simulazione lancio dei dadi utente
let lancioUserDadoUno = Math.floor(Math.random()*6) + 1;
let lancioUserDadoDue = Math.floor(Math.random()*6) + 1;
let totaleUser = lancioUserDadoUno + lancioUserDadoDue;

let flag = 0;
document.getElementById("lancio").onclick = function() {
    if(flag == 0) {
        this.textContent = "Lancio user";
        console.log("COMPUTER: Dado 1 = " + lancioComputerDadoUno + " dado 2 = " + lancioComputerDadoDue + " totale = " + totaleComputer);
        flag++;
    } else {
        this.textContent = "Lancio computer";
        console.log("USER: Dado 1 = " + lancioUserDadoUno + " dado 2 = " + lancioUserDadoDue + " totale = " + totaleUser);
        checkWinner();
        flag--;
    }
}

// funzione per stampare il vincitore e i tentativi rimasti
let i = 1; // variabile di conteggio dei tentativi
function checkWinner() {
    let msg = document.getElementById("status");
    if(totaleComputer > totaleUser) {  // se il computer vince il lancio
        i++; 
        if(i < 4) {
            if(i == 3) {
                msg.innerText = "Vince il computer, hai ancora " + (4 - i) + " tentativo";
            } else {
                msg.innerText = "Vince il computer, hai ancora " + (4 - i) + " tentativi";
            }
        } else {
            msg.innerText = "Vince il computer, hai esaurito i tentativi, HAI PERSO!! :)";
        }
    } else if(totaleComputer < totaleUser) {
        if(i == 1) {
            msg.innerText = "HAI VINTOOO!! In " + i + " tentativo!!";
        } else {
            msg.innerText = "HAI VINTOOO!! In " + i + " tentativi!!";
        }
    } else {
        i++;
        if(i < 4) {
            msg.innerText = "PAREGGIO!! Hai ancora " + (4 - i) + " tentativi!!";
        } else {
            msg.innerText = "PAREGGIO!! Hai perso...tentativi esauriti!!";
        }
        if(i == 3) {
            msg.innerText = "PAREGGIO!! Hai ancora " + (4 - i) + " tentativo!!";
        } else {
            if(4 - i == 0) {
                msg.innerText = "PAREGGIO!! Hai ancora " + (4 - i) + " tentativi!! HAI PERSO! :)";
            } else {
                msg.innerText = "PAREGGIO!! Hai ancora " + (4 - i) + " tentativi!!";
            }
        }
    }
    // reset delle variabili per poter giocare ancora
    resetVariable();
}

// funzione per fare il reset delle variabili e gestire la questione dei tentativi
function resetVariable() {
    // simulazione lancio dei dadi computer
    lancioComputerDadoUno = Math.floor(Math.random()*6) + 1; 
    lancioComputerDadoDue = Math.floor(Math.random()*6) + 1; 
    totaleComputer = lancioComputerDadoUno + lancioComputerDadoDue;

    // simulazione lancio dei dadi utente
    lancioUserDadoUno = Math.floor(Math.random()*6) + 1;
    lancioUserDadoDue = Math.floor(Math.random()*6) + 1;
    totaleUser = lancioUserDadoUno + lancioUserDadoDue;
} 