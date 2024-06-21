const validatePassword = require('./passwordValidator');

const testCases = [
    { password: "short", expected: "La contraseña tiene menos de 8 caracteres." },
    { password: "longpassword1!", expected: "La contraseña tiene más de 10 caracteres." },
    { password: "Valid8P@ss", expected: "La contraseña es válida." },
    { password: "NoNumbers!", expected: "La contraseña debe contener al menos un número." },
    { password: "noUpperCase8!", expected: "La contraseña debe contener al menos una letra mayúscula." },
    { password: "NOLOWERCASE8!", expected: "La contraseña debe contener al menos una letra minúscula." },
    { password: "NoSpecialChar8", expected: "La contraseña debe contener al menos un carácter especial." },
    { password: "Sh0r1!", expected: "La contraseña tiene menos de 8 caracteres." }
];

testCases.forEach((testCase) => {
    const result = validatePassword(testCase.password);
    const isSuccess = result === testCase.expected;
    console.log(`Probando contraseña: ${testCase.password}`);
    console.log(`  Resultado: ${result}`);
    console.log(`  Esperado: ${testCase.expected}`);
    console.log(`  Prueba ${isSuccess ? 'exitosa' : 'fallida'}`);
    console.log();
});
