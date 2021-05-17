var merge = function(nums1, m, nums2, n) {
    nums1.splice(m)
    console.log(nums1);
    nums1.push(...nums2);
   return nums1.sort((a,b)=>a-b);    
};

console.log(merge([1,2,3,0,0,0], 3, [2,4,5,6], 2));