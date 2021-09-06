"use strict";

let theName = "peter";

capitalize(theName);

function capitalize(str) {
  let newName = str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
  console.log(newName);
}

//old way
/* let theName = "peter";

capitalize();

function capitalize() {
  let newName = theName.substring(0, 1).toUpperCase() + theName.substring(1).toLowerCase();
  console.log(newName);
} */
