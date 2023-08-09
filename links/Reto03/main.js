let input = document.getElementById('input')
let btnInput = document.getElementById('btnInput')
let listaTareas = document.getElementById('listaTareas')
let btnCerrar = document.getElementById('btnCerrar')

btnInput.addEventListener('click', function (e) {
    e.preventDefault();
    let entrada = input.value
    if(entrada !=''){
    let tarea = entrada
    var crearTarea = document.createElement('li')
    var txt = document.createTextNode(tarea)
        crearTarea.appendChild(txt)
        listaTareas.appendChild(crearTarea) 
        input.value = '';
    }
    else {
        alert('Ingrese una Tarea Por Favor')
    }
}
)

document.addEventListener('click', function (e) {
    if (e.target.localName == 'li') {
        e.target.innerHTML = e.target.innerHTML 
        e.target.classList.add('realizado')
        containerCheck.style.display = 'flex';
    }
})

btnCerrar.addEventListener('click', function (e) {
    containerCheck.style.display = 'none';
    
    
})







// //abre modal al hacer check las tareas //
// checkbox.addEventListener('click', function () {
//     containerCheck.style.display="flex"
// })

// //cierra modal al apretar boton aceptar//
// btnCerrar.addEventListener('click', function () {
//     containerCheck.style.display= 'none'
// })

