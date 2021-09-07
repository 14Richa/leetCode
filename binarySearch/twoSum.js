var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length -1;
    while (left < right) {
        if(numbers[left] > (target - numbers[right])) {
            right --;
        }
        if(numbers[left] < (target - numbers[right])) {
            left ++;
        }
        if((numbers[left] + numbers[right] == target)) {
            //console.log(left, right)
            return [left+1, right+1]
        }
    }
    
};

console.log(twoSum([2,7,11,5], 9))