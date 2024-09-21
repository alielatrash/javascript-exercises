// if divisible by 4 then leap 
// but if also divisible by 100 (% = 0) then not a leap year

// BUT if divisible by 100 BUT also divisibly by 400
// 1600 divisibly by 4 and divisibly by 100 --> Should NOT be a leap year. 

const leapYears = function(year) {

    if (year%100 !== 0 && year%4 === 0) {
        return true; 
    } else if (year%100 === 0 && year%400 === 0) {
        return true; 
    } else {
        return false;
    };

}

// Do not edit below this line
module.exports = leapYears;
