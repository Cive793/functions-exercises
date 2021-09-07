"use strict";

let fullName = "Michael Jo Bjkwnjwnvkn";
const join = getNameParts(fullName);

getNameParts(fullName);

function getNameParts(nameParam) {
  let firstName = nameParam.substring(0, nameParam.indexOf(" "));
  let middleName = nameParam.substring(nameParam.indexOf(" ") + 1, nameParam.lastIndexOf(" "));
  let lastName = nameParam.substring(nameParam.lastIndexOf(" ") + 1);
  return firstName + " " + middleName + " " + lastName;
}

console.log(join);
