var findPeakElement = function(nums) {
    let left = 0; 
    let right = nums.length -1;
    while (left < right) {
    var middle = Math.floor((left + right)/2);
   // console.log(middle)
        if(nums[middle + 1] > nums[middle]) {
        left = middle + 1
        }
        else {
         right = middle;
        }
    }
    return left;
};