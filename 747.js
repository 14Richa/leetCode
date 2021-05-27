var dominantIndex = function(nums) {
    let maximumNumber = Math.max(...nums)
    let index = nums.indexOf(maximumNumber)

    for( var i = 0; i <nums.length; i ++) {
        if (nums[i] * 2 > maximumNumber && nums[i] !== maximumNumber) return -1
    }

    return index;
};

console.log(dominantIndex([3,6,1,2]))
