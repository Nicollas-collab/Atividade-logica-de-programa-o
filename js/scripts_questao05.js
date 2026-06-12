

// PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//capturando o evento de submit
formDados.addEventListener('submit', (evt)=> {
    evt.preventDefault()

    const form_num = new  FormData(formDados)

    let lado1 = parseFloat(form_num.get('lado1'))
    let lado2 = parseFloat(form_num.get('lado2'))
    let lado3 = parseFloat(form_num.get('lado3'))

    if(lado1 === lado2 && lado2 === lado3){
        divResultado.innerHTML = (`É um triângulo Equilátero`)
    }else if( lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
        divResultado.innerHTML = (`É um triângulo escaleno `)
    }else{
        divResultado.innerHTML = (`É um triângulo isóscele `)
}})
