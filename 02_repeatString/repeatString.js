const repeatString = function (stringInput,numInput) {

let emptyField = '';

  if (numInput < 0) {
    return 'ERROR';
  } else {
  for (let i=0; i < numInput; i++) {
    emptyField += stringInput;
  };
  
};

return emptyField;

};

// repeatString();

// Do not edit below this line
module.exports = repeatString;
