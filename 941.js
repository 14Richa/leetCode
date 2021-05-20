
var validMountainArray = function(arr) {
    if(arr.length < 3) return false;
    let foundPeak = false;
    for(let i=1;i<arr.length-1;i++){
        if(arr[i-1]<arr[i] && arr[i] < arr[i+1] && !foundPeak){
            continue;
        }
        else if(foundPeak && arr[i] > arr[i+1] && arr[i-1] > arr[i]){
            continue;
        }
        else if(!foundPeak && arr[i] > arr[i-1] && arr[i] > arr[i+1]){
            foundPeak = true;
        }
        else return false;
    }
    return foundPeak;

    
};

console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9]))