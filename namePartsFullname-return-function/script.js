"use strict";

const fullname = "mIchAel jO BjkSDjwAkn";

getNameParts(fullname);

function getNameParts(nameParam) {
  const firstName = nameParam.substring(0, nameParam.indexOf(" "));
  const middleName = nameParam.substring(nameParam.indexOf(" ") + 1, nameParam.lastIndexOf(" "));
  const lastName = nameParam.substring(nameParam.lastIndexOf(" ") + 1);
  console.log(firstName, middleName, lastName);

  capitalize(firstName, middleName, lastName);
  const capFullName = capitalize(firstName, middleName, lastName);
  console.log(capFullName);
}

function capitalize(name1, name2, name3) {
  //console.log("im running");
  const firstNameCap = name1.substring(0, 1).toUpperCase() + name1.substring(1).toLowerCase();
  const middleNameCap = name2.substring(0, 1).toUpperCase() + name2.substring(1).toLowerCase();
  const lastNameCap = name3.substring(0, 1).toUpperCase() + name3.substring(1).toLowerCase();
  return { firstNameCap, middleNameCap, lastNameCap };
}
