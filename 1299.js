var replaceElements = function(arr) {

 for(let i = 0; i < arr.length; i++) {

     arr[i] = helperfunction(i+1, arr.length-1, arr);
 }
 //arr[arr.length -1] = -1

 return arr;

};



var helperfunction = function(start, end, arr) {
    if(start>end) return -1;
    let max = arr[start];
    for(let i = start; i <= end; i++) {
        if(arr[i] > max) max = arr[i]

    }
    return max;
}

console.log(replaceElements([17,18,5,4,6,1]))
// console.log(helperfunction(1, 3, [2,1,3,5,8,4,5]))