
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    var inputs = form.querySelectorAll('input');
    var i = 0;
    while (i < inputs.length) {  
        var input = inputs[i];
        var error = document.getElementById(`error-${input.id}`);
        if (!input.value.trim()) {
            e.preventDefault();
            error.innerText = 'Campo obbligatorio';
        } 
        i++;
    }
});



