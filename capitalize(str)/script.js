"use strict";

const theName = "pETer";
const cap = capitalize(theName);

function capitalize(str) {
  let newName = str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
  return newName;
}

console.log(cap);
