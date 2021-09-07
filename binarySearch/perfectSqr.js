var isPerfectSquare = function(num) {
    var left = 0; 
    var right = num;
    var ans = false;
    while (left <= right) {
        var middle = Math.floor((left+right)/2);
        console.log(middle);
        if(middle*middle == num) {
            ans = true;
        }
        if(middle*middle > num) {
            right = middle -1;
        }
        else {
            left = middle + 1;
        }
    }
    return ans;
};


console.log(isPerfectSquare(16));