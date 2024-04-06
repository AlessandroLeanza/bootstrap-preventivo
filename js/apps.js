console.log("Bootstrap-Preventivo")
// creo un array di stringhe con i codici sconto
const codSconto = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']
// mi recupero dal dom l'id dove inserire i codici sconto
const codiceInserito = document.getElementById('CodProm');

// recupero dal dom il form
const form = document.getElementById('form')
// quando premo il bottone scateno un evento di tipo lavoro
form.addEventListener('submit', tipoLavoro)
// recupero l'id prezzo dove andare ad inserire il prezzo finale
prezzoElement = document.getElementById('prezzo')

// creo una funzione che in base al tipo di lavoro selezionato di assegna un valore
function tipoLavoro(e) {
    // sto modificando il comportamnto di defoult del tag form con all'interno il buttom
    e.preventDefault()
    // inseriamo i valori nel document
    const job = document.getElementById('job').value
    // creo un controllo ai vari tipi di lavoro 
    let prezzo = 0;
    if (job === 'Backed Development') {
        prezzo = 20.50 * 10
    } else if (job === 'Frontend Development') {
        prezzo = 15.30 * 10
    } else if (job === 'Project Analysis') {
        prezzo = 33.60 * 10
    }
    // assegno alla variabile sconto il valore in base al codice inserito
    const sconto = codiceInserito.value;
    // creo un controllo per vedere se il codice sconto è incluso tra quelli disponibili
    const controllo = codSconto.includes(sconto)
    if (controllo) {
        prezzo = prezzo * 0.75;
        console.log(prezzo);
    } else if (sconto == "") {

    } else if (!controllo) {
        alert('codice non valido')
    }

    // Formatto il prezzo finale
    const prezzoIntero = Math.floor(prezzo);
    const prezzoDecimale = (prezzo % 1).toFixed(2);

    // Mi vado a stampare sul documento il prezzo finale con la parte intera e decimale separate dalla virgola
    document.querySelector('#prezzo .intero').innerHTML = prezzoIntero;
    document.querySelector('#prezzo .decimal').innerHTML = prezzoDecimale.slice(2);
    document.querySelector('#prezzo .virgola').innerHTML = ',';
}

