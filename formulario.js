const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');



const expresiones = {
    card: /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/,
    cvc: /^[0-9]{3,4}$/,
    amount: /^\d{6,9}$/,
    firstname: /^[a-zA-Z '.-]*$/,
    lastname: /^[a-zA-Z '.-]*$/,
    city: /^[a-zA-Z '.-]*$/,
    state: /^[a-zA-Z '.-]*$/,
    postalcode: /^\d{6,9}$/,
}


const campos = {
    card: false,
    cvc: false,
    amount: false,
    firstname: false,
    lastname: false,
    city: false,
    state: false,
    postalcode: false
}







const validarFormualrio = (e) => {
    switch (e.target.name) {
        case "card":
            validarCampo(expresiones.card, e.target, 'cardinput');


            break;



        case "amount":
            validarCampo(expresiones.card, e.target, 'amount');


            break;


        case "cvc":
            validarCampo(expresiones.cvc, e.target, 'cvc');

            break;

        case "firstname":
            validarCampo(expresiones.firstname, e.target, 'firstname');

            break;

        case "lastname":
            validarCampo(expresiones.lastname, e.target, 'lastname');


            break;

        case "city":
            validarCampo(expresiones.city, e.target, 'city');


            break;

        case "state":
            validarCampo(expresiones.state, e.target, 'state');


            break;

        case "postalcode":
            validarCampo(expresiones.postalcode, e.target, 'postalcode');


            break;


    }


}


const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`${campo}`).classList.add('form-control-correcto');
        document.getElementById(`${campo}`).classList.remove('form-control-incorrecto');
        document.getElementById('formulario__input-error').classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`${campo}`).classList.remove('form-control-correcto');
        document.getElementById(`${campo}`).classList.add('form-control-incorrecto');
        document.getElementById('formulario__input-error').classList.add('formulario__input-error-activo');
        campos[campo] = false;

    }

}



inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormualrio)
    input.addEventListener('blur', validarFormualrio)

});




formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.card && campos.cvc && campos.amount && campos.firstname && campos.lastname && campos.city && campos.state && campos.postalcode) {
        formulario.reset();

    } else { 
        document.querySelector('.alert').classList.remove('d-none');
    }





});

























