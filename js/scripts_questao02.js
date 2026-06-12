
// PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//capturando o evento de submit
formDados.addEventListener('submit', (evt)=> {
    evt.preventDefault()

    const form_num = new  FormData(formDados)

    let larg = parseFloat(form_num.get('larg'))
    let altu = parseFloat(form_num.get('altu'))

    let area = larg * altu
    let tinta = area / 2

    divResultado.innerHTML = `Área da parede: ${area.toFixed(2).replace('.', '.')}
    Tinta necessária: ${tinta.toFixed(2)} litros`
})



