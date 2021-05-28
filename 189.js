var rotate = function(nums, k) {
    for (let i = 0; i < k; i++) {
        // let nums1 = nums.pop();
        // nums.unshift(nums1)>
        //console.log(k)
        nums = rotateHelper(nums);
    }
  
    return nums;
};

var rotateHelper = function(nums) {
    let n = nums.length;
    //nums[0] = nums[n-1];
    let last = nums[n-1];
    let arr = [];
    arr.push(last);
    for(let i=0;i<n-1;i++){
        arr.push(nums[i])
    }
    // nums.unshift(nums1)
    // console.log(nums)
    return arr;

}

console.log(rotate([1,2,3,4,5,6,7], 3));