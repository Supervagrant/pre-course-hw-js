// code
let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let copyPassportMarried = structuredClone(passportMarried);
copyPassportMarried.married = true;

console.log(passportMarried);
console.log(copyPassportMarried);
