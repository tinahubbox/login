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

        // Salva i dati dell'utente in localStorage
        localStorage.setItem("userNome", nome);
        localStorage.setItem("userCognome", cognome);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        // Mostra un alert o messaggio di conferma
        alert("Registrazione completata!");

        // Reindirizza alla pagina accedi.html
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
            content = `
                <h1>Ciao!</h1>
                <p>Le tue auto preferite</p>
                <div class="heart">❤️</div>`;
            break;
        case 'ricerche':
            content = `
                <h1>Ricerche Salvate</h1>
                <p>Ecco le tue ricerche recenti</p>`;
            break;
        case 'valutazione':
            content = `
                <h1>Valutazione Auto</h1>
                <p>Qui puoi vedere le valutazioni delle tue auto.</p>`;
            break;
        case 'dati':
            // Recupera i dati salvati nel localStorage
            const nome = localStorage.getItem("userNome") || '';
            const cognome = localStorage.getItem("userCognome") || '';
            const email = localStorage.getItem("userEmail") || '';
            const password = localStorage.getItem("userPassword") || '';

            // Form per mostrare/modificare i dati
            content = `
                <h1>Ciao!</h1>
                <h2>I tuoi dati personali</h2>
                <form id="form">
                    <div class="label-form">
                        <label for="nome">Nome:</label>
                    </div>
                    <div>
                        <input type="text" id="nome" value="${nome}"class="input-form">
                    </div>
                    <div class="label-form">
                        <label for="cognome">Cognome:</label>
                    </div>
                    <div>
                        <input type="text" id="cognome" value="${cognome}"class="input-form">
                    </div>
                    <div class="label-form">
                        <label for="email">Email:</label>
                    </div>
                    <div>
                        <input type="email" id="email" value="${email}"class="input-form" >
                    </div>
                    <div class="label-form">
                        <label for="password">Password:</label>
                    </div>
                    <div>
                        <input type="password" id="password" value="${password}"class="input-form">
                    </div>
                    <button type="button" onclick="aggiornaDati()" class="button">Aggiorna i tuoi dati</button>
                </form>
                `;
            break;
        case 'esci':
            content = `
                <h1>Sei sicuro di voler uscire?</h1>
                <button onclick="logout()">Conferma Esci</button>`;
            break;
        default:
            content = `
                <h1>Ciao!</h1>
                <p>Le tue auto preferite</p>
                <div class="heart">❤️</div>`;
    }

    document.getElementById('dynamic-content').innerHTML = content;
}

function aggiornaDati() {
    // Aggiorna i dati utente salvati
    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const password = document.getElementById("password").value;

    // Salva di nuovo i dati aggiornati nel localStorage
    localStorage.setItem("userNome", nome);
    localStorage.setItem("userCognome", cognome);
    localStorage.setItem("userPassword", password);

    alert("Dati aggiornati con successo!");
}
function logout() {
    alert("Logout effettuato!");
}