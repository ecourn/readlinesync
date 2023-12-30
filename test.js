import { prompt } from "./readline-sync.js";

const NOMBRE_MAX = 1000000000;

const MESSAGE_CHOIX_OPERATION =
  "\n1. Addition\n2. Soustraction\n3. Multiplication\n4. Division\n\nVeuillez choisir une opération: ";

console.clear();

console.log(`ADDITION MASTER ™\n${MESSAGE_CHOIX_OPERATION}`);

const validerOperation = () => {
  let tempValiderOperation = prompt();
  if (tempValiderOperation === "") {
    console.log(`\nVeuillez entrer quelque chose.${MESSAGE_CHOIX_OPERATION}`);
    return validerOperation();
  }
  let tempValiderOperationNumber = Number(tempValiderOperation);
  if (isNaN(tempValiderOperationNumber)) {
    console.log(`\nVeuillez entrer un chiffre.${MESSAGE_CHOIX_OPERATION}`);
    return validerOperation();
  }
  if (tempValiderOperationNumber < 1 || tempValiderOperationNumber > 4) {
    console.log(
      `\nVeuillez entrer un chiffre entre 1 et 4.${MESSAGE_CHOIX_OPERATION}`
    );
    return validerOperation();
  }
  return tempValiderOperationNumber;
};

const operation = validerOperation();

console.log(`\nVeuillez entrer le premier nombre: `);

const validerNombre1 = () => {
  let tempValiderNombre1 = prompt();
  if (tempValiderNombre1 === "") {
    console.log(`\nVeuillez entrer quelque chose.`);
    return validerNombre1();
  }
  let tempValiderNombre1Number = Number(tempValiderNombre1);
  if (isNaN(tempValiderNombre1Number)) {
    console.log(`\nVeuillez entrer un chiffre.`);
    return validerNombre1();
  }
  if (Math.abs(tempValiderNombre1Number) > NOMBRE_MAX) {
    console.log(
      `\nVeuillez entrer un chiffre entre ${-NOMBRE_MAX} et ${NOMBRE_MAX}.`
    );
    return validerNombre1();
  }
  return tempValiderNombre1Number;
};

const nombre1 = validerNombre1();

console.log(`\nVeuillez entrer le deuxième nombre: `);

const validerNombre2 = () => {
  let tempValiderNombre2 = prompt();
  if (tempValiderNombre2 === "") {
    console.log(`\nVeuillez entrer quelque chose.`);
    return validerNombre2();
  }
  let tempValiderNombre2Number = Number(tempValiderNombre2);
  if (isNaN(tempValiderNombre2Number)) {
    console.log(`\nVeuillez entrer un chiffre.`);
    return validerNombre2();
  }
  if (Math.abs(tempValiderNombre2Number) > NOMBRE_MAX) {
    console.log(
      `\nVeuillez entrer un chiffre entre ${-NOMBRE_MAX} et ${NOMBRE_MAX}.`
    );
    return validerNombre2();
  }
  if (operation === 4 && tempValiderNombre2Number === 0) {
    console.log(`\nVeuillez entrer un chiffre différent de 0.`);
    return validerNombre2();
  }
  return tempValiderNombre2Number;
};

const nombre2 = validerNombre2();

switch (operation) {
  case 1:
    console.log(`\n${nombre1} + ${nombre2} = ${nombre1 + nombre2}`);
    break;
  case 2:
    console.log(`\n${nombre1} - ${nombre2} = ${nombre1 - nombre2}`);
    break;
  case 3:
    console.log(`\n${nombre1} * ${nombre2} = ${nombre1 * nombre2}`);
    break;
  case 4:
    console.log(`\n${nombre1} / ${nombre2} = ${nombre1 / nombre2}`);
    break;
}
