/*
var form = document.getElementById('candidarsi')
form.addEventListener('submit', (e) => {
    var inputs = form.querySelectorAll('input');
    var i = 0;
    while (i < inputs.length) {
        var input = inputs[i];
        var errore = document.getElementById(`errore-${input.id}`);
        if (!input.value.trim()) {
            e.preventDefault();
            errore.innerText = '*Campo obbligatorio';
        } else {
            errore.innerText = '';
            if (input.id === 'email') {
                if (!validaEmail(input.value.trim())) {
                    e.preventDefault();
                    errore.innerText = '*Email non valida';
                }
            }
            if (input.id === 'data_di_nascita') {
                var scelta = new Date(input.value);
                var oggi = new Date();
                var anni = oggi.getFullYear() - scelta.getFullYear();
                if (anni < 18 || anni > 100) {
                    e.preventDefault();
                    errore.innerText = '*Data di nascita non valida';
                }
            }
            if (input.id === 'numero_di_telefono') {
                if (!validaTelefono(input.value.trim())) {
                    e.preventDefault();
                    errore.innerText = '*Numero di telefono non valido';
                }}
        }
        i++;
    }
})*/
const form = document.getElementById('form-login');
form.addEventListener('submit', (e) => {
    var inputs = form.querySelectorAll('input-form');
    var i = 0;
    while (i < inputs.length) {  
        var input = inputs[i];
        var error = document.getElementById(`error-${input.id}`);
        if (!input.value.trim()) {
            e.preventDefault();
            error.innerText = 'Campo obbligatorio';
        } else {
            error.innerText = '';
            if (input.id === 'email') {
                if (!validaEmail(input.value.trim())) {
                    e.preventDefault();
                    error.innerText = 'Inserisci la tua email';
                }
            }
        }
        i++;
    }
});