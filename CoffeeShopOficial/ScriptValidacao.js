document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const campos = document.querySelectorAll('.required');
    const spans = document.querySelectorAll('.span-required');
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    const numeroRegex = /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/;

    function seterror(index){
        if(campos[index]){
            campos[index].style.border = '1px solid #e63636';
            spans[index].style.display = 'block';
        }
    }

    function removeError(index){
        if(campos[index]){
            campos[index].style.border = '';
            spans[index].style.display = 'none';
        }
    }

    function nameValidate(){
        if(campos[0] && campos[0].value.length < 3){
            seterror(0);
        }
        else{
            removeError(0);
        }
    }

    function emailValidate(){
        if(campos[1] && emailRegex.test(campos[1].value)){
            removeError(1);
        }
        else{
            seterror(1);
        }
    }

    function numeroValidate(){
        if(campos[2] && numeroRegex.test(campos[2].value)){
            removeError(2);
        }
        else{
            seterror(2);
        }
    }

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            nameValidate();
            emailValidate();
            numeroValidate();
            
        });
    }

   
    if(campos.length > 0) {
        campos[0].addEventListener('input', nameValidate);
        campos[1].addEventListener('input', emailValidate);
        campos[2].addEventListener('input', numeroValidate);
    }
});
//Aguarda o evento DOMContentLoaded antes de executar.

//Verifica se os elementos (campos e vãos) existem antes de tentar manipulá-los.