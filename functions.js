"use strict";


/** 1. isHometown */


const isHometown = (town) => {
  return town === 'San Francisco'; 
}
 
console.log(isHometown('San Francisco'));
console.log(isHometown('Milwaukee'));


/** 2. getFullName */

const getFullName = (firstName, lastName) => {
  return firstName + " " + lastName;
}

console.log(getFullName("Baloonicorn", "Hackbright"));


/** 3. calculateTotal */

// Define your function here
const calculateTotal = (basePrice, state, tax = 0.05) => {

  let subtotal = basePrice * (1 + tax);
  let fee = 0;

  if (state === 'CA') {
    fee = 0.03 *subtotal;
  } else if (state === 'PA') {
    fee = 2;
  } else if (state === 'MA') {
    if (basePrice <= 100) {
      fee = 1;
    } else {
      fee = 3;
    }
  }
  return subtotal + fee;
}

console.log(calculateTotal(100, 'CA'))
console.log(calculateTotal(100, 'PA'))
console.log(calculateTotal(100, 'MA'))
console.log(calculateTotal(90, 'MA'))
console.log(calculateTotal(100, 'WI'))
console.log(calculateTotal(100, 'CA', 0.1))