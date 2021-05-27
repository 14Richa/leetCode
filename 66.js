var plusOne = function(digits) {
    let count;
for(let i = digits.length - 1; i >= 0; i --) {
    if(digits[i] === 9) {
        digits[i] = 0;
        count = 1;
    } 
    else {
        digits[i] ++;
        count =0
        break;

    }
}

if (count == 1) {
    digits.unshift(1)
}


return digits;
   
};







console.log(plusOne([8,9,9,9]))