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
                    img: 'rangeRover.jpg',
                    marca: 'Land Rover',
                    modello: 'Range Rover Evoque',
                    descrizione: '2.0d i4 mhev S awd 150cv',
                    prezzo: '€ 34.300',
                    rata: '€ 594 al mese'   
                },
                {
                    img: 'bmw.jpg',
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
                <div class="heart">❤️</div>
                <div class="row">`;
                favorites.forEach(auto => {
                    content +=`
                            <div class="card">
                             <img src="${auto.img}" class="card-img-top" alt="${auto.marca} ${auto.modello}">
                            <div class="card-body">
                                <h5 class="card-title">${auto.marca} ${auto.modello}</h5>
                                <p class="card-text">${auto.descrizione}</p>
                                <p class="card-text"><strong>${auto.prezzo}</strong></p>
                                <p class="card-text"><em>${auto.rata}</em></p>
                                <a href="#" class="button">Scopri di più</a>
                            </div>
                        </div>
                    </div>
                `;
            });
            content +=`
            <div>
                <button class="button">cerca la tua auto</button>;
            </div>`;
            break;
        case 'ricerche':
            content = `
                <h1>Ricerche Salvate</h1>
                <p>Ecco le tue ricerche recenti</p>
                <button class="button">cerca la tua auto</button>`;
            break;
        case 'valutazione':
            content = `
                <h1>Valutazione Auto</h1>
                <p>Qui puoi vedere le valutazioni delle tue auto.</p>
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
                                    <button type="button" onclick="aggiornaDati()" class="button"">Aggiorna i tuoi dati</button>
                                </form>
                                <div class="mt-3">
                                    <button type="button" onclick="documents()" class="button">I tuoi documenti</button>
                                </div>
                                <a href="#" class="delete-your-account text-danger mt-3 d-block">cancella il tuo account</a>
                            </div>
            
                            <!-- Colonna per la foto del venditore -->
                            <div class="col-lg-4 col-md-6 col-sm-12 text-center">
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
    window.location.href = 'Accedi.html';
}