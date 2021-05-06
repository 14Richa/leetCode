/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr = [];
    for(let i = 0; i < nums.length; i ++) {
        let ans = Math.pow(nums[i],2)
        arr.push(ans)

    }
    console.log(typeof(arr[0]))
    
    return arr.sort(function(a, b) {
        return a - b;
      });

};

nums = [-4,1, 5,10, 9]
console.log(sortedSquares(nums))