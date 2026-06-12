console.log("um texto")

// PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//capturando o evento de submit
formDados.addEventListener('submit', (evt)=> {
    evt.preventDefault()

    const form_num = new  FormData(formDados)

    let prim = parseFloat(form_num.get('prim'))
    let segun = parseFloat(form_num.get('segun'))
    let terc = parseFloat(form_num.get('terc'))

    let media = (prim + segun + terc) / (3)

    if(media >=6){
        divResultado.innerHTML = (`com  a média de ${media} está aprovado(a) `)
    }
    else{
        divResultado.innerHTML = (`com a média ${media}, está reprovado`)
    }})

