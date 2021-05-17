var removeElement = function(nums, val) {
    for(let i=0; i < nums.length; i++) {
        if(nums[i] == val) {
            console.log(nums.splice(i,1))
            var a = i--;
           console.log(a);
        }
    }
    return nums.length;
};

console.log(removeElement([3,2,4,6,5,5,6], 5))