/**
 * Implementa una función que dada una edad, devuelva si la persona es mayor de edad o no
 *
 */

function isAdult(age) {
    
    let message;
    if (age >= 18) {message = true}
    else {message = false};
    return (message);

    // if (age >= 18) {   una solución
	// 	return true;
	// } else {
	// 	return false;
	// }

    // if (age >= 18) {   otra solución
	// 	return true; 
    // }
	// 	return false;



}

console.log(isAdult(17)); // false, se espera false porque 17 es menor de 18 años
console.log(isAdult(18)); // true, se espera true porque 18 es igual a la mayoría de edad
console.log(isAdult(25)); // true, se espera true porque 25 es mayor de 18 años

let isAdultAge = age >= 18;
return (age);