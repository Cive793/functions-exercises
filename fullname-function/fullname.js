"use strict";

/* let lastName = "Potter";
let firstName = "Harry";
let middleName = "James"; */

fullName("Potter", "Harry", "James", "Pottypotpot");

function fullName(lastName, firstName, middleName) {
  //
  let fullname;
  if (middleName == undefined) {
    fullname = firstName.concat(" ", lastName);
  } else {
    fullname = firstName.concat(" ", middleName, " ", lastName);
  }

  console.log(fullname);
}
