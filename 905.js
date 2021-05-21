var sortArrayByParity = function(nums) {
    var arrEven = []
    var arrOdd = []
    for (let i = 0; i < nums.length; i ++) {
        if(nums[i] % 2 == 0) {
            arrEven.push(nums[i])
        }
        else {
            arrOdd.push(nums[i])
        }

    }
    nums.length = 0;
    nums.push(...arrEven, ...arrOdd);
    return nums;
};

console.log(sortArrayByParity([1,2,4,3,5,6]))