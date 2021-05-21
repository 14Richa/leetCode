var moveZeroes = function(nums) {
    var arr1 = [] // array which has zeros
    var arr2 = [] // array which doesnot have zeros
    for (let i = 0; i <nums.length; i++) {
        if(nums[i] === 0) {
            arr1.push(nums[i])
        } else {
            arr2.push(nums[i])
        }
    }
    nums.length = 0; // array length zero
    nums.push(...arr2, ...arr1);

    return nums;
};

console.log(moveZeroes([0,1,0,3,12]))