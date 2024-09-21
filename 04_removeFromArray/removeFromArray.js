let arrayInput = [1,2,3,4];
let removeInput = [1,2];

const removeFromArray = function(arrayInput,removeInput) {
  
  for (let i=0; i <= removeInput.length-1; i++) {
    let indexRemove = arrayInput.indexOf(removeInput[i]); 
    if (indexRemove !== -1) {
      let finalRemove = arrayInput.splice(indexRemove,1);
    };
    console.log(arrayInput);
  }
  return arrayInput;
};

// Do not edit below this line
module.exports = removeFromArray;
