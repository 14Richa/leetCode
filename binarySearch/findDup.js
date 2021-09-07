var findDuplicate = function(nums) {
    nums.sort(function(a, b) {
        return a - b;
        });
       // console.log(nums)
        for(var i = 1; i < nums.length; i ++) {
            if(nums[i] == nums[i -1]) {
                return nums[i];
            }
        }
        return -1;
};