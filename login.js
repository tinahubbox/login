//controllo sul form
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    var inputs = form.querySelectorAll('input:not(.button, #informativa)');
    console.log(inputs);
    
    inputs.forEach((input)=>{
        var error=document.getElementById(`error-${input.id}`);
        console.log(error);
        
        if(!input.value.trim()){
            e.preventDefault();
            error.innerText='campo obbligatorio';
        } else{
            error.innerText='';
        }
        });
        matchPassword();
    });

let checkpassword=document.getElementById('error-checkpassword')
function matchPassword() {
    var pw1 = document.getElementById("password").value;     
    var pw2 = document.getElementById("checkpassword").value;
    if(pw1 !==pw2){
        checkpassword.innerText="la password non coincide"}
        else {
            checkpassword.innerText = ""; 
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
            content = `
                <h1>Dati Personali</h1>
                <p>Modifica i tuoi dati personali qui.</p>`;
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

function logout() {
    alert("Logout effettuato!");
}