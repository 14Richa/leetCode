/**
 * @param {number[]} nums
 * @return {number}
 */
/*
Algorithm:
Iterate over the array and keep track of count, 
update max whenever count exceeds max
*/
var findMaxConsecutiveOnes = function(nums) {
    let count = 0, ans = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){ 
            count++;
        }   else count = 0;
        ans = Math.max(ans, count)
    }
    return ans;
};