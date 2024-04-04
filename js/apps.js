console.log("Bootstrap-Preventivo")

// creo un array di tipi di lavoro
const jobs = ['Backed Development', 'Frontend Development', 'Project Analysis']
console.log(jobs);

// recupero dal document i tipi di lavoro
const form = document.getElementById('tipo-di-lavoro')
form.addEventListener('submit', tipoLavoro)

function tipoLavoro(e) {
    e.preventDefault()
    const job = document.getElementById('job').value
    console.log(job);
    // creiamo un controllo ai tipi di lavoro e inseriamo i valori nel document
    if (job === 'Backed Development') {
        const prezzo = 20.50 * 10
        console.log(document.getElementById('prezzo').innerHTML = '€ ' + prezzo + ',00');
    } else if (job === 'Frontend Development') {
        const prezzo = 15.30 * 10
        console.log(document.getElementById('prezzo').innerHTML = '€ ' + prezzo + ',00');
    } else if (job === 'Project Analysis') {
        const prezzo = 33.60 * 10
        console.log(document.getElementById('prezzo').innerHTML = '€ ' + prezzo + ',00');
    } else {
        console.log(document.getElementById('prezzo').innerHTML = 'Nessun lavoro selezionato');
    }
}
