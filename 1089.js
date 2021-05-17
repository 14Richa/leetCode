var duplicateZeros = function(arr) {
    var length = arr.length;
     for (i = 0; i < length; i++) {
        if(arr[i] === 0) {
            arr.splice(i, 0, 0)
            i++;            
        }

        
    }
    var l_final = arr.length;
    arr.splice(length, l_final)
    console.log(arr)
    return;

};


duplicateZeros([1,0,4,0,0,5,6,3]);