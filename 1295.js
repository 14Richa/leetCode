var findNumbers = function(nums) {
    let count = 0;
    for(let i = 0; i <nums.length; i ++) {
        if((nums[i].toString().length) % 2 === 0) {
            count ++;
        }
    }
     return count;
};

nums = [11, 2, 6543, 999, 6764]
console.log(findNumbers(nums));