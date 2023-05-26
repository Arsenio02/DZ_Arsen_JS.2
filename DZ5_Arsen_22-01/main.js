// CONVERT

const fromCurrencySelect = document.getElementById('from');
const fromAmountInput = document.getElementById('fromAmount');
const toCurrencySelect = document.getElementById('to');
const toAmountInput = document.getElementById('toAmount');
const convertButton = document.getElementById('convertButton');
const clearButton = document.getElementById('clearButton');

let currencies = null;

// загрузить данные о валютах из файла json
fetch('currencies.json')
    .then(response => response.json())
    .then(data => currencies = data)
    .catch(error => console.error(error));

function convert() {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const fromAmount = fromAmountInput.value;
    const toAmount = fromAmount * currencies[fromCurrency] / currencies[toCurrency];
    toAmountInput.value = toAmount.toFixed(2);
}

function clear() {
    fromAmountInput.value = '';
    toAmountInput.value = '';
}

convertButton.addEventListener('click', convert);
clearButton.addEventListener('click', clear);
