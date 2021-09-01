/* sorted array of distinct integers and a target value, return the index if the target is found. If not, return the 
index where it would be if it were inserted in order.*/

var searchInsert = function(nums, target) {
    //Base case
    if(target <=nums[0]) {
        return 0;
    }
    if(target > nums.length[i-1]) {
        return nums.length;
    }
    var i = 1;
    while(i < nums.length) {
        if(nums[i] === target) {
            return i;
        }
        if(nums[i] > target) {
            return i;
        }
        i++;
    }
    return i;
};


console.log(searchInsert([1,2,3,5,6], 5))