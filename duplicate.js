var check = function(arr, n) {
    for(var i = 0; i < arr.length; i ++) {
        if(n == arr[i]) return true;
    }
return false;
};
var findDuplicates = function(nums) {
final = [];
ans = [];
 for(var j = 0; j < nums.length; j++)
 {
     if (check(final, nums[j]) == false) {
         final.push(nums[j]) // what are you doing here????
     }
     else { ans.push(nums[j])}

  }
  return ans;

};
