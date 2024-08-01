// Inicialización de variables, objetos y DOM
const form = document.getElementById("form");
const convertButton = document.getElementById("convertButton");
const entryCoin = document.getElementById("entryCoin");
const exitCoin = document.getElementById("exitCoin");
const amountMoney = document.getElementById("amountMoney");
const error = document.getElementById("error");

// Funciones de evento
function checkForm (event){
    if (entryCoin.value == "0") {
        entryCoin.focus();
        event.preventDefault();
        error.innerText = 'No se ha seleccionado la moneda de origen';
        return false;
    } else if (exitCoin.value == "0") {
        exitCoin.focus();
        event.preventDefault();
        error.innerText = 'No se ha seleccionado la moneda de destino';
        return false;
    } else if (amountMoney.value < 1) {
        amountMoney.focus();
        event.preventDefault();
        error.innerText = 'El importe debe ser superior o igual a 1';
        return false;
    } else {
        return true
    }
}

function convertCoin (entryCoin, amountMoney, exitCoin){
    if (entryCoin.value == "EUR" && exitCoin.value == "USD") {
        return amountMoney.value * 1.0789;
    } else if (entryCoin.value == "EUR" && exitCoin.value == "GBP") {
        return amountMoney.value * 0.8501;
    } else if (entryCoin.value == "EUR" && exitCoin.value == "JPY") {
        return amountMoney.value * 167.61;
    } else if (entryCoin.value == "USD" && exitCoin.value == "EUR") {
        return amountMoney.value * 0.9211;
    } else if (entryCoin.value == "USD" && exitCoin.value == "GBP") {
        return amountMoney.value * 0.786;
    } else if (entryCoin.value == "USD" && exitCoin.value == "JPY") {
        return amountMoney.value * 155.00;
    } else if (entryCoin.value == "GBP" && exitCoin.value == "EUR") {
        return amountMoney.value * 1.15;
    } else if (entryCoin.value == "GBP" && exitCoin.value == "USD") {
        return amountMoney.value * 1.21;
    } else if (entryCoin.value == "GBP" && exitCoin.value == "JPY") {
        return amountMoney.value * 196.98;
    } else if (entryCoin.value == "JPY" && exitCoin.value == "EUR") {
        return amountMoney.value * 0.0077;
    } else if (entryCoin.value == "JPY" && exitCoin.value == "USD") {
        return amountMoney.value * 0.0075;
    } else if (entryCoin.value == "JPY" && exitCoin.value == "GBP") {
        return amountMoney.value * 0.0065;
    }
}

// Inicio de carga de eventos
form.addEventListener('submit', checkForm);
form.addEventListener('submit', convertCoin);

// Variables resultados 
console.log(`${amountMoney} ${entryCoin} equivalen a ${convertCoin()} ${exitCoin}.`);
