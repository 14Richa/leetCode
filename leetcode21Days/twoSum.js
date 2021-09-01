/**Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.*/


var twoSum = function(nums, target) {
/* nested for loop starting with one index and second 
sindex evaluating it and returning the index which fulfill the condition.*/
    for (let i = 0; i <= nums.length; i++) {
        for (let j = i+1; j <= nums.length; j++) {
          if ((nums[i] + nums[j]) == target && i != (j)) {
            return [i, j];
          };
        };
      };
    
};

console.log(twoSum([2,7,11,15], 9))
