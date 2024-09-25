
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

