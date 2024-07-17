//Haz tú validación en javascript acá

const Nombre = document.querySelector('#nombre');
const Email = document.querySelector('#email');
const Asunto = document.querySelector('#asunto');
// const textArea = document.querySelector('.formcontato__textarea');
const BotonForm = document.querySelector('.formcontato__boton');

const campoDeFormulario = document.querySelectorAll('[required]');
const formulario = document.querySelector('[data-formulario]');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('formulario validado');
})

BotonForm.addEventListener('click', (e) =>{
    if(!Nombre.checkValidity()){
        e.preventDefault();
        // errores()
        Nombre.classList.add('falta__valor')
        Nombre.setAttribute('placeholder', 'ingrese su nombre')
        setInterval(() => {
        Nombre.classList.remove('falta__valor')
        Nombre.setAttribute('placeholder', 'Nombre')
    }, 2000);   
    }else if(!Email.checkValidity()){
        e.preventDefault();

        Email.classList.add('falta__valor')
        Email.setAttribute('placeholder', 'ingrese su email')
        setInterval(() => {
        Email.classList.remove('falta__valor')
        Email.setAttribute('placeholder', 'Email')
    }, 2000);   
    } else if(!Asunto.checkValidity()){
        e.preventDefault();

        Asunto.classList.add('falta__valor')
        Asunto.setAttribute('placeholder', 'ingrese un asunto')
        setInterval(() => {
        Asunto.classList.remove('falta__valor')
        Asunto.setAttribute('placeholder', 'Asunto')
    }, 2000);   
    }
})
