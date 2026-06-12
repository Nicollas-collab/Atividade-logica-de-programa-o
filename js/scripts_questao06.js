

// PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//capturando o evento de submit
formDados.addEventListener('submit', (evt)=> {
    evt.preventDefault()

    const form_num = new  FormData(formDados)

    let peso = parseFloat(form_num.get('peso'))
    let altura = parseFloat(form_num.get('altura'))
   
    let imc = peso / (altura * altura)

    console.log(peso , ' <--> ', altura, ' <-> ', peso / (altura * altura))

    if(imc < 20){
        divResultado.innerHTML = (`Seu imc ${imc.toFixed(2)} significa: abaixo do peso`)
    }else if(imc >= 20 && imc < 25){
        divResultado.innerHTML = (`Seu imc ${imc.toFixed(2)} significa: normal `)
    }else if(imc >= 25 && imc < 30){
        divResultado.innerHTML = (`Seu imc ${imc.toFixed(2)} significa: acima do peso `)
    }else if(imc >= 30 && imc < 35){
        divResultado.innerHTML = (`Seu imc ${imc.toFixed(2)} significa: obesidade`)
    }else{ 
        divResultado.innerHTML = (`Seu imc ${imc.toFixed(2)} significa: obesidade morbida `)
}})
