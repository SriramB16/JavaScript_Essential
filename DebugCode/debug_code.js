function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let result1 = add(num1, num2);
        let result2 = subtraction(num1, num2);
        let result3 = multiply(num1, num2);
        let result4 = division(num1, num2);
        
        // Display the result
        displayResult(result1, result2, result3, result4);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    // Multiply the numbers
    return a * b;
}

function add(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function division(a, b) {
    if (b === 0) {
        return 'Cannot divide by zero';
    }
    return a / b;
}

function displayResult(result1, result2, result3, result4) {
    // Display the result in the paragraph element using innerHTML
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `The result for addition: ${result1}<br>
                               The result for subtraction: ${result2}<br>
                               The result for multiplication: ${result3}<br>
                               The result for division: ${result4}`;
}
