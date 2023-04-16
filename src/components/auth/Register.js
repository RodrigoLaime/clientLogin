function Validation(values) {
    /*  alert('') */
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   /*  const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/
 */

    if (values.email === '') {
        error.email = 'Email should not be empty'
        alert('Email should not be empty')
    } else if (!email_pattern.test(values.email)) {
        error.email = 'Email Did not match'
        alert('Email Did not match')
    } else {
        error.email = ''
    }

    if (values.password === '') {
        error.password = 'Password should not be empty'
        alert('Password should not be empty')
    } /* else if (!password_pattern.test(values.password)) {
        error.password = 'Password Did not match'
        alert('Password Did not match')
    } */ else {
        error.password = ''
    }

    if (values.verifyPass === '') {
        error.verifyPass = 'verifyPass should not be empty'
        alert('verifyPass should not be empty')
    } /* else if (!password_pattern.test(values.verifyPass)) {
        error.verifyPass = 'Password Did not match'
        alert('Password Did not match')
    }  */else if (values.verifyPass !== values.password) {
        error.verifyPass = 'La contraseña no es igual'
        alert('La contraseña no es igual')
    } else {
        error.verifyPass = ''
    }

    return error;
}

export default Validation