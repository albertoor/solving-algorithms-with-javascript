/*
    ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain 
    anything but exactly 4 digits or exactly 6 digits.
    
    If the function is passed a valid PIN string, return true, else 
    return false.

    EXAMPLES:
        "1234"   -->  true
        "12345"  -->  false
        "a234"   -->  false
*/

const validatePIN = (PIN) => {
  const regex = /(^\d{4}$)|(^\d{6}$)/;
  if (regex.test(PIN)) return true;
  else return false;
};

console.log(validatePIN("a234"));
console.log(validatePIN("123456"));
console.log(validatePIN("a234"));
console.log(validatePIN("896790"));
console.log(validatePIN("12.5"));
