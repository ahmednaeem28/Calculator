document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let firstNum = parseFloat(document.getElementById('firstNum').value);
    let secondNum = parseFloat(document.getElementById('secondNum').value);
    let operator = document.getElementById('operator').value;

    let result;

    if (operator === '+') {
        result = firstNum + secondNum;
    } else if (operator === '-') {
        result = firstNum - secondNum;
    } else if (operator === '*') {
        result = firstNum * secondNum;
    } else if (operator === '/') {
        result = firstNum / secondNum;
    } else {
        result = 'Invalid operator';
    }

    document.getElementById('result').innerText = 'Result: ' + result;
    console.log('Result:', result);
});





