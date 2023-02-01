
const KMPRICE = 0.21 

//prendere i kilometri e l'età
const inputKwElement = document.querySelector('input#km')

console.log(inputKwElement)

const ageElement = document.getElementById('age')
console.log(ageElement)

//prendere bottone

const buttonElement = document.getElementById('pulsante')
console.log(buttonElement)

//ascoltare bottone

buttonElement.addEventListener('click',function(){
    console.log('applica modifiche')

    //prendere il valore dei km inseriti dall'utente
    let kwSelect = inputKwElement.value
    console.log(kwSelect)

    //prendere il valore dell'età inseriti dall'utente
    let ageSelect = ageElement.value
    console.log(ageSelect)
})