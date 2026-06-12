
// PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//capturando o evento de submit
formDados.addEventListener('submit', (evt)=> {
    evt.preventDefault()

    const form_num = new  FormData(formDados)

    let km = parseFloat(form_num.get('km'))
    let cons = parseFloat(form_num.get('cons'))
    let preç = parseFloat(form_num.get('preç'))

    let consumo = km / cons
    let valor = preç * consumo

    divResultado.innerHTML = `Quantidade de combustível: ${consumo.toFixed(2).replace('.', '.')}
    valor total a paga: ${valor.toFixed(2)}`
})



