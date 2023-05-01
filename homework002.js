function test(testName, expected, result){
    testCase = `Test Case: ${testName}`;
    console.log(testCase);
    if (result == expected){
        console.log("Success!");
        return;
    }
    throw new Error(`Expected: ${expected} Result: ${result} `);
}

// Write a function that takes an array of numbers as input and returns the average of those numbers.

function average(numeros){
    let media = 0;
    for (n = 0; n < numeros.length; n++){
        media += numeros [n];
    }
    let resultado = media/numeros.length;
    return resultado;
}
test(' o teste da media de 2 e 2 é 2', 2, average([2,2]));
