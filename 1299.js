var replaceElements = function(arr) {
    if(arr.length === 1){
        return [-1]
    }
    for(var i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        //arr[i] = maxNumber;
        var maxNumber = Math.max(maxNumber, currentNumber);
        arr[i] = maxNumber;


    }
    return arr;
    
};

console.log(replaceElements([1,2,3,4,18,5]))