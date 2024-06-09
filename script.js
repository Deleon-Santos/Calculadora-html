function displaynum(n1){
    calculadora.display . value  = calculadora.display.value + n1;
}

function apagarUltimoNumero() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function toggleSign() {
    const display = document.getElementById('display');
    if (display.value.charAt(0) === '-') {
        display.value = display.value.slice(1);
    } else {
        display.value = '-' + display.value;
    }
}
function calculateSqrt() {
    const display = document.getElementById('display');
    
    
    try {
        display.value = Math.sqrt(eval(display.value));
    } 
 
    catch (e) {
        display.value = 'Error';
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } 
  
    catch (e) {
        display.value = 'Error';
    }
}