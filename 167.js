var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length -1;
    while (start < end) {
        if(target === numbers[start] + numbers[end]) return start+1, end+1;

    }

    return [start+1, end+1]
};

console.log(twoSum([2,7,11,15],9))