var thirdMax = function(nums) {
    // if (nums.length < 3) { 
    //     return Math.max(...nums);
    // };
    
    let first = nums[0]
    //checking for first largest
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] > first) first = nums[i];
        //console.log(first)
    };
    let secondNumber = Math.min(...nums);
    //checking for secong largest
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > secondNumber && nums[i] < first) secondNumber = nums[i]
    }
   
    let thirdNumber = Math.min(...nums); 
    //checking for third largest.
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > thirdNumber && nums[i] < secondNumber) thirdNumber = nums[i];
    };

    if(secondNumber == thirdNumber) {
        return first;
    }


    return thirdNumber;
    };

console.log(thirdMax([2,2,3,1]))