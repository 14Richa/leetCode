/* array nums sorted in non-decreasing order, remove the 
duplicates in-place such that each unique element appears only once*/
var removeDuplicates = function(nums) {
    for(var i = 0; i < nums.length; i++) {
      while(nums[i] == nums[i+1]) {
          nums.splice(i,1);

      }
    };
    return nums.length;
};


console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))