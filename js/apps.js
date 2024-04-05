console.log("Bootstrap-Preventivo")

const codSconto = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']
const codiceInserito = document.getElementById('CodProm');

// recupero dal document i tipi di lavoro
const form = document.getElementById('tipo-di-lavoro')
form.addEventListener('submit', tipoLavoro)

prezzoElement = document.getElementById('prezzo')

function tipoLavoro(e) {
    e.preventDefault()
    const job = document.getElementById('job').value
    // creiamo un controllo ai tipi di lavoro e inseriamo i valori nel document
    let prezzo = 0;
    if (job === 'Backed Development') {
        prezzo = 20.50 * 10
    } else if (job === 'Frontend Development') {
        prezzo = 15.30 * 10
    } else if (job === 'Project Analysis') {
        prezzo = 33.60 * 10
    }
    const sconto = codiceInserito.value;
    const controllo = codSconto.includes(sconto)
    if (controllo) {
        prezzo = prezzo * 0.75;
        console.log(prezzo);
    } else if (sconto == "") {

    } else if (!controllo) {
        alert('codice non valido')
    }
    prezzo = prezzo.toFixed(2)
    prezzoElement.innerHTML = "&euro; " + prezzo;
}

