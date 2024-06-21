const validateCard = require('./Tarjeta');

const testCases = [
    { number: "123456789012345", expiryDate: "12/25", cvv: "123", expected: ["El número de tarjeta debe tener exactamente 16 dígitos."] }, // Caso 1
    { number: "1234567890123456", expiryDate: "12/22", cvv: "123", expected: ["La fecha de expiración no es válida o está en el pasado."] }, // Caso 2
    { number: "1234567890123456", expiryDate: "12/25", cvv: "12", expected: ["El CVV debe tener 3 o 4 dígitos."] }, // Caso 3
    { number: "1234567890123456", expiryDate: "12/25", cvv: "123", expected: ["La tarjeta es válida."] }, // Caso 4
    { number: "1234567890123456", expiryDate: "12/20", cvv: "1234", expected: ["La fecha de expiración no es válida o está en el pasado."] }, // Caso 5
    { number: "1234567890123456", expiryDate: "12/25", cvv: "12a", expected: ["El CVV debe tener 3 o 4 dígitos."] }, // Caso 6
    { number: "12345678901234", expiryDate: "12/25", cvv: "123", expected: ["El número de tarjeta debe tener exactamente 16 dígitos."] }, // Caso 7
    { number: "1234567890123456", expiryDate: "12/25", cvv: "1234", expected: ["La tarjeta es válida."] } // Caso 8
];

testCases.forEach((testCase) => {
    const result = validateCard(testCase.number, testCase.expiryDate, testCase.cvv);
    const isSuccess = JSON.stringify(result) === JSON.stringify(testCase.expected);
    console.log(`Probando tarjeta: ${testCase.number} | ${testCase.expiryDate} | ${testCase.cvv}`);
    console.log(`  Resultado: ${result}`);
    console.log(`  Esperado: ${testCase.expected}`);
    console.log(`  Prueba ${isSuccess ? 'exitosa' : 'fallida'}`);
    console.log();
});
