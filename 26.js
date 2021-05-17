var removeDuplicates = function(nums) {
    for(var i = 0; i < nums.length; i++) {
      while(nums[i] == nums[i+1]) {
          nums.splice(i,1);

      }
    };
    return nums.length;
};



console.log(removeDuplicates([1]))