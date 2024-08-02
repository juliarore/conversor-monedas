// Inicialización de variables, objetos y DOM
const form = document.getElementById("form");
const convertButton = document.getElementById("convertButton");
const entryCoin = document.getElementById("entryCoin");
const exitCoin = document.getElementById("exitCoin");
const amountMoney = document.getElementById("amountMoney");
const error = document.getElementById("error");
const result = document.getElementById("result");

// Funciones de evento
function checkForm (event){
    error.innerText = ''; // Limpiamos errores previos
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

function convertCoin(entryCoinValue, amountMoneyValue, exitCoinValue) {
    // EUR como moneda de entrada
    if (entryCoinValue == "EUR" && exitCoinValue == "USD") {
        return amountMoneyValue * 1.0789;
    } else if (entryCoinValue == "EUR" && exitCoinValue == "GBP") {
        return amountMoneyValue * 0.8501;
    } else if (entryCoinValue == "EUR" && exitCoinValue == "JPY") {
        return amountMoneyValue * 167.61;
    // USD como moneda de entrada
    } else if (entryCoinValue == "USD" && exitCoinValue == "EUR") {
        return amountMoneyValue * 0.9211;
    } else if (entryCoinValue == "USD" && exitCoinValue == "GBP") {
        return amountMoneyValue * 0.786;
    } else if (entryCoinValue == "USD" && exitCoinValue == "JPY") {
        return amountMoneyValue * 155.00;
    // GBP como moneda de entrada
    } else if (entryCoinValue == "GBP" && exitCoinValue == "EUR") {
        return amountMoneyValue * 1.15;
    } else if (entryCoinValue == "GBP" && exitCoinValue == "USD") {
        return amountMoneyValue * 1.21;
    } else if (entryCoinValue == "GBP" && exitCoinValue == "JPY") {
        return amountMoneyValue * 196.98;
    // JPY como moneda de entrada    
    } else if (entryCoinValue == "JPY" && exitCoinValue == "EUR") {
        return amountMoneyValue * 0.0077;
    } else if (entryCoinValue == "JPY" && exitCoinValue == "USD") {
        return amountMoneyValue * 0.0075;
    } else {
        return amountMoneyValue * 0.0065;
    }
}

function printResult(entryCoin, amountMoney, exitCoin) {
    // Llamamos a la función convertCoin y guardamos el resultado en una variable
    const convertedAmount = convertCoin(entryCoin.value, amountMoney.value, exitCoin.value);
    // Mostramos el resultado de la conversión en el elemento result 
    result.innerText = `${amountMoney.value} ${entryCoin.value} equivalen a ${convertedAmount.toFixed(2)} ${exitCoin.value}.`; 
}

// Inicio de carga de eventos
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenimos el envío del formulario
    // Si la validación del formulario es correcta (checkForm devuelve true), imprimimos el resultado de la conversión
    if (checkForm(event)) {
        printResult(entryCoin, amountMoney, exitCoin);
    }
});
