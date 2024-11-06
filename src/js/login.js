//controllo sul form
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault()
    var inputs = form.querySelectorAll('input:not(.button, #informativa)');   
    let formValid = true; // Variabile per tracciare se il form è valido

    inputs.forEach((input)=> {
        var error = document.getElementById(`error-${input.id}`);
        if (!input.value.trim()) {
            error.innerText = 'campo obbligatorio';
            formValid = false; // Imposta su false se uno dei campi è vuoto
        } else {
            error.innerText = '';
        }
    });

    if (!matchPassword()) {
        formValid = false;
    }

    // Controlla la privacy
    let errorPrivacy = document.getElementById('errorPrivacy');
    let checkbox = document.querySelector("input[id=informativa]");
    if (!checkbox.checked) {
        errorPrivacy.innerText = 'Devi accettare per poterti registrare';
        formValid = false;
    } else {
        errorPrivacy.innerText = '';
    }

    // Se il form è valido, salva i dati e reindirizza alla pagina di accesso
    if (formValid) {
        const nome = document.getElementById("name").value;
        const cognome = document.getElementById("surname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Salvataggio dati
        localStorage.setItem("userNome", nome);
        localStorage.setItem("userCognome", cognome);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        alert("Registrazione completata!");
        window.location.href = "Accedi.html";
    }
});

function matchPassword() {
    var pw1 = document.getElementById("password").value;     
    var pw2 = document.getElementById("checkpassword").value;
    if (pw1 !== pw2) {
        document.getElementById('error-checkpassword').innerText = "La password non coincide";
        return false;
    } else {
        document.getElementById('error-checkpassword').innerText = ""; 
        return true;
    }
}
	
let privacy=document.querySelector('form');
let checkbox = document.querySelector("input[id=informativa]");
privacy.addEventListener('submit', (e) => {
    let errorPrivacy = document.getElementById('errorPrivacy');
    if (!checkbox.checked) {
        console.log("Checkbox is not checked..");
        e.preventDefault();
        errorPrivacy.innerText = 'Devi accettare per poterti registrare'; 
    } else {
        console.log("Checkbox is checked..");
        errorPrivacy.innerText = '';
    }
});
document.addEventListener('click', function(event) {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnToggler = menuToggler.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggler) {
        mobileMenu.classList.remove('active');
    }
});
//parte dinamica del login
function showContent(section) {
    let content = '';

    switch (section) {
        case 'preferiti':
            //array
            const favorites=[
                {
                    img: '/assets/images/rangeRover.jpg',
                    marca: 'Land Rover',
                    modello: 'Range Rover Evoque',
                    descrizione: '2.0d i4 mhev S awd 150cv',
                    prezzo: '€ 34.300',
                    rata: '€ 594 al mese'
                },
                {
                    img: '/assets/images/bmw.jpg',
                    marca: 'BMW',
                    modello: 'X3',
                    descrizione: 'xdrive20d mhev 48V Business Advantage auto',
                    prezzo: '€ 29.900',
                    rata: '€ 529 al mese'
                }
            ];
            content = `
                <h1>Ciao!</h1>
                <p>Le tue auto preferite</p>
                <div class="row">`;
                favorites.forEach(auto => {
                    content +=`
                            <div class="card">
                                    <img src="${auto.img}" class="card-img-left" alt="${auto.marca} ${auto.modello}">
                            <div class="card-body">
                                <h5 class="card-title">${auto.marca} ${auto.modello}</h5>
                                <p class="card-text">${auto.descrizione}</p>
                                <p class="card-text"><strong>${auto.prezzo}</strong></p>
                                <p class="card-text"><em>${auto.rata}</em></p>
                                <a href="#" class="button">scopri di più</a>
                            </div>
                        </div>
                `
            });
            content +=`
            <div>
                <button class="button">cerca la tua auto</button>
            </div>`
            break;
        case 'ricerche':
            content = `
                <h1>Ricerche Salvate</h1>
                <p>Ecco le tue ricerche recenti</p>
                <div id="ricerche-salvate-container" >
                </div>
                <button class="button">cerca la tua auto</button>`;
            break;
        case 'valutazione':
            content = `
                <h1>Valutazione Auto</h1>
                <p>Qui puoi vedere le valutazioni delle tue auto.</p>
                <div id="valutazioni-salvate-container"> 
                </div>
                <button class="button">cerca la tua auto</button>`;
            break;
            case 'dati':
                // Recupera i dati salvati
                const nome = localStorage.getItem("userNome") || '';
                const cognome = localStorage.getItem("userCognome") || '';
                const email = localStorage.getItem("userEmail") || '';
                const password = localStorage.getItem("userPassword") || '';
                content = `
                    <div class="container mt-5">
                        <div class="row">
                            <!-- Colonna per i dati personali -->
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <h1>Ciao!</h1>
                                <h2>I tuoi dati personali</h2>
                                <form id="form">
                                    <div class="mb-3">
                                        <label for="nome" class="label-form">Nome:</label>
                                        <input type="text" id="nome"class="input-form" value="${nome}">
                                    </div>
                                    <div class="mb-3">
                                        <label for="cognome" class="label-form">Cognome:</label>
                                        <input type="text" id="cognome" class="input-form" value="${cognome}">
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="label-form">Email:</label>
                                        <input type="email" id="email" class="input-form" value="${email}">
                                    </div>
                                    <div class="mb-3">
                                        <label for="password" class="label-form">Password:</label>
                                        <input type="password" id="password" class="input-form" value="${password}">
                                    </div>
                                    <button type="button" onclick="aggiornaDati()" class="button"">aggiorna i tuoi dati</button>
                                </form>
                                <div class="mt-3">
                                    <button type="button" onclick="documents()" class="button">i tuoi documenti</button>
                                </div>
                                <a href="#" class="delete-your-account text-danger mt-3 d-block">cancella il tuo account</a>
                            </div>
            
                            <!-- Colonna per la foto del venditore -->
                            <div class="col-lg-4 col-md-6 col-sm-12 text-center" id=venditore-bro>
                                <h3>Il tuo venditore bro</h3>
                                <img src="esempio.png" alt="Venditore" class="img-fluid rounded">
                                <p class="mt-2">il tuo venditore bro</p>
                            </div>
                        </div>
                    </div>
                `;
                break;
        case 'esci':
            content = `
                <h1>Sei sicuro di voler uscire?</h1><br>
                <button onclick="logout()" class="button">Esci</button>`;
            break;
        default:
            content = `
                <h1>Ciao!</h1>
                <p>Le tue auto preferite</p>
                <div class="heart">❤️</div>`;
                
    }

    document.getElementById('dynamic-content').innerHTML = content;
    if (section === 'ricerche') {
        caricaRicercheSalvate(); // Chiama la funzione per ottenere i dati delle ricerche salvate
    }
    if (section === 'valutazione') {
        caricaValutazioniSalvate(); // Chiama la funzione per ottenere i dati delle valutazioni auto
    }
}
// funzione per le ricerche
function caricaRicercheSalvate() {
    fetch('https://jzm00xe65b.execute-api.eu-central-1.amazonaws.com/dev/saved-filters', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    })
    .then(response => response.json())
    .then(data => {
        console.log('Dati ricevuti dall\'API:', data);

        const container = document.getElementById('ricerche-salvate-container');
        if (data.savedFilters && data.savedFilters.length > 0) {
            container.innerHTML = ''; // Pulisci il contenitore

            data.savedFilters.forEach(filter => {
                let filterContent = `
                    <div class="ricerca-item">
                        <h3 class="ricerca-item-title">${filter.filterName}</h3>`;
                        //tutti i filtri
                        if (filter.brand && filter.brand.length > 0) {
                            filterContent += `<div class="filter-line"> <span class= "filter-strong">Marca:</span>`;
                            filter.brand.forEach(brand => {
                                filterContent += `<span class="badge">${brand}</span>`;
                            });
                            filterContent += `</div>`;
                        }               
                        if (filter.model && filter.model.length > 0) {
                            filterContent += `<div class="filter-line"> <span class= "filter-strong">Modello:</span>`;
                            filter.model.forEach(model=> {
                                filterContent += `<span class="badge">${model}</span>`;
                            });
                            filterContent += `</div>`;
                        }
                        //filtri con condizione ternaria 
                        if (filter.mileage) {
                            filterContent += `<div class="filter-line">
                                <span class="filter-strong">Chilometraggio:</span>`;
                            filterContent += filter.mileage.min ? `<span class="badge">>${filter.mileage.min} Km</span>` : '';
                            filterContent += filter.mileage.max ? `<span class="badge"><${filter.mileage.max} Km</span>` : '';
                        
                            filterContent += `</div>`;
                        }
                        if (filter.power) {
                            filterContent += `<div class="filter-line">
                                <span class="filter-strong">Potenza:</span>`;
                            filterContent+= filter.power.min ?  `<span class="badge">>${filter.power.min} cv</span>` : '';
                            filterContent += filter.power.max ? `<span class="badge"><${filter.power.max} cv</span>` : '';
                        
                            filterContent += `</div>`;}
                        
                         if (filter.displacement) {
                                filterContent += `<div class="filter-line">
                                    <span class="filter-strong">Cilindrata:</span>`;
                                filterContent+= filter.displacement.min ?  `<span class="badge">>${filter.displacement.min} </span>` : '';
                                filterContent += filter.displacement.max ? `<span class="badge"><${filter.displacement.max} </span>` : '';
                            
                                filterContent += `</div>`;}
                        if (filter.registrationYear) {
                                    filterContent += `<div class="filter-line">
                                        <span class="filter-strong">Immatricolazione:</span>`;
                                    filterContent+= filter.registrationYear.min ?  `<span class="badge">>${filter.registrationYear.min} </span>` : '';
                                    filterContent += filter.registrationYear.max ? `<span class="badge"><${filter.registrationYear.max} </span>` : '';
                                
                                    filterContent += `</div>`;}
                        
                        if (filter.traction&& filter.traction.length > 0) {
                            filterContent += `<div class="filter-line"> <span class= "filter-strong">Trazione:</span>`;
                            filter.traction.forEach(traction=> {
                            filterContent += `<span class="badge">${traction}</span>`;
                            });
                            filterContent += `</div>`; } 
                        if (filter.seats) {
                                filterContent += `<div class="filter-line">
                                    <span class="filter-strong">Posti:</span>`;
                                filterContent+= filter.seats.min ?  `<span class="badge">>${filter.seats.min} </span>` : '';
                                filterContent += filter.seats.max ? `<span class="badge"><${filter.seats.max} </span>` : '';
                            
                        
                                filterContent += `</div>`;}
                        
                        
        
                        
                        // il filtro "price" con "monthlyFee" = "mensile"
                        if (filter.price && filter.price.monthlyFee) {
                            filterContent += `<div class="filter-line"> <span class= "filter-strong">Prezzo mensile:</span>`;
                            filterContent +=filter.price.monthlyFee.duration ? `<span class="badge"> ${filter.price.monthlyFee.duration}mesi </span>` : '';
                            filterContent +=filter.price.monthlyFee.min ?  `<span class="badge">> ${filter.price.monthlyFee.min}€ </span>` : '';
                            filterContent +=filter.price.monthlyFee.max ? `<span class="badge">< ${filter.price.monthlyFee.max}€ </span>` : '';
                            filterContent += `</div>`;}

                        if (filter.price && filter.price.totalAmount){
                            filterContent +=`<div class="filter-line"> <span class= "filter-strong">Prezzo totale:</span>`;
                            filterContent +=filter.price.totalAmount.min ? `<span class="badge">>  ${filter.price.totalAmount.min}€ </span>` : '';
                            filterContent += filter.price.totalAmount.max ? `<span class="badge">< ${filter.price.totalAmount.max}€ </span>` : '';
                            filterContent += `</div>`;}

                        if (filter.fuelType&& filter.fuelType.length > 0){
                            filterContent += `<div class="filter-line"> <span class= "filter-strong">Carburante:</span>`;
                            filter.fuelType.forEach(fuelType=> {
                            filterContent += `<span class="badge">${fuelType}</span>`;
                            });
                            filterContent += `</div>`; } 

                        if (filter.tags&& filter.tags.length > 0){
                            filterContent += `<div class="filter-line"> <span class= "filter-strong">tags:</span>`;
                            filter.tags.forEach(tags=> {
                            filterContent += `<span class="badge">${tags}</span>`;
                            });
                            filterContent += `</div>`; } 
                            
                            filterContent += `
                            <button class="button scopripiu" onclick="scopriDiPiu">scopri di più</button>
                            </div>`;
                            container.innerHTML += filterContent;
            });
        } else {
            container.innerHTML = `'<p>Cerca la tua prossima macchina </p>
            <div> <svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 41.125V9.79167C10 8.71458 10.3917 7.79253 11.175 7.02552C11.9583 6.25851 12.9 5.875 14 5.875H34C35.1 5.875 36.0417 6.25851 36.825 7.02552C37.6083 7.79253 38 8.71458 38 9.79167V41.125L24 35.25L10 41.125Z" fill="#C5ACED"/></svg> </div>>
                '`
        }
    })
    .catch((error) => {
        console.error('Errore durante il caricamento delle ricerche salvate:', error);
        const container = document.getElementById('ricerche-salvate-container');
        container.innerHTML = '<p>Si è verificato un errore durante il caricamento delle ricerche salvate.</p>';
    });
}
//funzione per le valutazioni 
function caricaValutazioniSalvate(){
    fetch('https://jzm00xe65b.execute-api.eu-central-1.amazonaws.com/dev/evaluations', {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('Dati ricevuti dall\'API:', data);

        const valutazionicontainer = document.getElementById('valutazioni-salvate-container');
        if(data.requestedEvaluations && data.requestedEvaluations.length > 0){
            valutazionicontainer.innerHTML = '';
           
            data.requestedEvaluations.forEach(auto => {
                let valutazione = auto.evaluationPrice === "N.D." ? auto.evaluationPrice : `${auto.evaluationPrice} €`;

                let autoContent = `<div class="valutazioni-item">
                    <div class="filter-line"><span class="filter-strong"> Marca: </span> <span class="badge"> ${auto.brand} </span></div>
                    <div class="filter-line"><span class="filter-strong"> Modello: </span> <span class="badge"> ${auto.model} </span></div>
                    <div class="filter-line"><span class="filter-strong"> Versione: </span> <span class="badge"> ${auto.version} </span></div>
                    <div class="filter-line"><span class="filter-strong"> Immatricolazione: </span> <span class="badge"> ${auto.registrationDate} </span></div>
                    <div class="filter-line"><span class="filter-strong"> Chilometri: </span> <span class="badge"> ${auto.mileage} Km </span></div>
                    <div class="filter-line"><span class="filter-strong"> Valutazione: </span> <span class="badge"> ${valutazione} </span></div>
                </div>`;
                
                valutazionicontainer.innerHTML += autoContent;
            });
        } else {
            valutazionicontainer.innerHTML = '<p> Valuta ora la tua auto</p>';
        }
    })
    .catch((error) => {
        console.error('Errore durante il caricamento delle valutazioni auto:', error);
        const valutazionicontainer = document.getElementById('valutazioni-salvate-container'); 
        valutazionicontainer.innerHTML = '<p>Si è verificato un errore durante il caricamento delle valutazioni auto.</p>';
    });   
}

// Aggiornamento dei dati utente salvati
function aggiornaDati() {
    
    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const password = document.getElementById("password").value;

// Salvataggio dei nuovi dati aggiornati nel localStorage
    localStorage.setItem("userNome", nome);
    localStorage.setItem("userCognome", cognome);
    localStorage.setItem("userPassword", password);

    alert("Dati aggiornati con successo!");
}
function logout() {
    alert("Logout effettuato!");
}
function documents(){
    window.location.href="documents.html";
}
function redirectToPersonalArea() {
    // Reindirizza alla pagina "Accedi.html"
    window.location.href = '/src/accedi.html';
}
