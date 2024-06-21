//Ejercicio: Validación de Tarjeta de Crédito
//Supongamos que estamos validando una tarjeta de crédito con los siguientes criterios:

//El número de tarjeta debe ser exactamente de 16 dígitos.
//La fecha de expiración debe ser válida y no estar en el pasado.
//El código de seguridad (CVV) debe ser de 3 o 4 dígitos.

function validateCard(number, expiryDate, cvv) {
    const errors = [];

    // Validar número de tarjeta
    if (!/^\d{16}$/.test(number)) {
        errors.push("El número de tarjeta debe tener exactamente 16 dígitos.");
    }

    // Validar fecha de expiración
    const [month, year] = expiryDate.split('/');
    const expiry = new Date(`20${year}-${month}-01`);
    const today = new Date();
    if (expiry <= today) {
        errors.push("La fecha de expiración no es válida o está en el pasado.");
    }

    // Validar CVV
    if (!/^\d{3,4}$/.test(cvv)) {
        errors.push("El CVV debe tener 3 o 4 dígitos.");
    }

    return errors.length > 0 ? errors : ["La tarjeta es válida."];
}

module.exports = validateCard;
