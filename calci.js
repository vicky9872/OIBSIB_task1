let resulte = document.getElementById('result');

function addToResult(num) {
    resulte.innerHTML += num;
}

function clearResult() {
    resulte.innerHTML = '';
}

function deleteLast() {
    resulte.innerHTML = resulte.innerHTML.slice(0, -1);
}

function calculate(operator) {
    let expression = resulte.innerHTML;
    let lastChar = expression.charAt(expression.length - 1);

    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
        expression = expression.slice(0, -1);
    }

    if (operator === '=') {
        resulte.innerHTML = eval(expression);
    } else {
        resulte.innerHTML += operator;
    }
}
