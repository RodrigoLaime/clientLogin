function Validation(values) {
    /*   alert(values) */
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
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
    } else {
      error.password = ''
    }
  
    return error;
  }
  
  export default Validation