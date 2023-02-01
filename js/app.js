//prendere i kilometri, l'età e bottone
const inputKwElement = document.querySelector('input#km')

const ageElement = document.getElementById('age')

const buttonElement = document.getElementById('pulsante')

//ascoltare bottone

buttonElement.addEventListener('click',function(){
   
    //prendere il valore dei km inseriti dall'utente
    let kwSelect = inputKwElement.value

    //prendere il valore dell'età inseriti dall'utente
    let ageSelect = ageElement.value
   
    //calcorale prezzo
    
    const KWPRICE = 0.21 
    //prima soluzione
    //if (ageSelect='1') {
    //    console.log(ageSelect.value='1')
    //    let minorenne =((kwSelect*KWPRICE)*0.8);
    //    console.log(minorenne)
    //    document.getElementById('price').innerHTML= minorenne +'€' +' '+'importo da pagare scontato del 20%';

    //} else if (ageSelect='2') {
    //    console.log(ageSelect.value='2')
    //    let adult =(kwSelect*KWPRICE);
    //    console.log(adult)
    //    document.getElementById('price').innerHTML= adult +'€' +' ';
    //}
    //else if (ageSelect='3') {
    //    console.log('3')
    //    let over65 =((kwSelect*KWPRICE)*0.6);
    //    console.log(over65)
    //    document.getElementById('price').innerHTML= over65 +'€' +' '+'importo da pagare scontato del 40%';
    //}

    //seconda soluzione
    switch (ageSelect){
        case'1':
            let minorenne =((kwSelect*KWPRICE)*0.8);
            console.log(minorenne)
            document.getElementById('price').innerHTML= minorenne +'€' +' '+'importo da pagare scontato del 20%';
            break
        case'2':
            let adult =(kwSelect*KWPRICE);
            console.log(adult)
            document.getElementById('price').innerHTML= adult +'€';
            break
        case'3':
            let over65 =((kwSelect*KWPRICE)*0.6);
            console.log(over65)
            document.getElementById('price').innerHTML= over65 +'€' +' '+'importo da pagare scontato del 40%';
            break
        }
})