/* an integer array nums and an integer val, 
remove all occurrences of val in nums in-place */

var removeElement = function(nums, val) {
  for(let i=0; i<nums.length; i++) {
      if(nums[i] == val) {
          nums.splice(i,1)
          i--
      }
  }
    return nums.length;
};


console.log(removeElement([0,1,2,2,3,0,4,2], 2))