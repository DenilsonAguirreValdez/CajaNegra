function validatePassword(password) {
    if (password.length > 10) {
        return "La contraseña tiene más de 10 caracteres.";
    }

    if (password.length < 8) {
        return "La contraseña tiene menos de 8 caracteres.";
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!hasLetters || (password.match(/[a-zA-Z]/g) || []).length < 2) {
        return "La contraseña debe contener al menos 2 letras.";
    }

    if (!hasUpperCase) {
        return "La contraseña debe contener al menos una letra mayúscula.";
    }

    if (!hasLowerCase) {
        return "La contraseña debe contener al menos una letra minúscula.";
    }

    if (!hasNumbers) {
        return "La contraseña debe contener al menos un número.";
    }

    if (!hasSpecialChars) {
        return "La contraseña debe contener al menos un carácter especial.";
    }

    return "La contraseña es válida.";
}

module.exports = validatePassword;
