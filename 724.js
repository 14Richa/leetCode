var pivotIndex = function(nums) {

    for(let i =0;i<nums.length;i++){
        // i would be potential pivot.
        let left_sum = 0;
        for(let j=0;j<i; j++) {
            left_sum = left_sum + nums[j];
        }
        let right_sum = 0;
        for( let k = i+1; k < nums.length; k++) {
            right_sum = right_sum+ nums[k]
        }
    
        if(left_sum == right_sum) return i;

    }
    return -1;
   
};
// var sumArray= function(start, end, arr){
//     let sum =0;
//     for(let i=start;i<=end;i++) sum+=arr[i]
//     return sum;
// }
// var helperFunction = function(start, arr) {
//     let sum = 0;
//     for(var i = start; i < arr.length; i++ ) {
//         sum = sum + arr[i]
//     }
//     return sum;

// }

// console.log(helperFunction( 2, [1,7,3,6,5,6]))

console.log(pivotIndex([1,7,3,6,5,6]))