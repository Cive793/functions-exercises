"use strict";

let fullname = "Michael Jo Bjkwnjwnvkn";

getNameParts(fullname);

function getNameParts(nameParam) {
  let firstName = nameParam.substring(0, nameParam.indexOf(" "));
  let middleName = nameParam.substring(nameParam.indexOf(" ") + 1, nameParam.lastIndexOf(" "));
  let lastName = nameParam.substring(nameParam.lastIndexOf(" ") + 1);
  console.log({ firstName, middleName, lastName });
}
