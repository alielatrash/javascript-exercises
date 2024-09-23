const sumAll = function(init,end) {
    if (init <= 0 || end <= 0) {
        return "ERROR";
      } else if (init%1 != 0 || end%1 != 0) {
        return "ERROR";
      } else if (typeof init != "number" || typeof end != "number") {
        return "ERROR";
      } else {
    
          let maxNum = Math.max(init,end);
          let minNum = Math.min(init,end);
          
          let arrayInit = [minNum,maxNum];
          let totalArray = [];
          for (i=minNum; i<=maxNum; i++) {
            finalArray = totalArray.push(i); 
          }
    
          let emptyArray = [];
          let result = 0;
    
          for (let i=0; i<=totalArray.length-1; i++) {
            result += parseInt(totalArray[i]);
          }
          return result;
        }
};

// Do not edit below this line
module.exports = sumAll;
