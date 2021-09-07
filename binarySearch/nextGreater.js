var nextGreatestLetter = function(letters, target) {
    var left = 0;
    var right = letters.length -1;
    var ans = "";
    if(target >= letters[right]) {
        return letters[0];
    }
    while (left <=right) {
        var middle = Math.floor((left+right)/2);
        console.log(letters[middle])
        if(letters[middle] <= target) {
            left = middle +1;

        }
        else {
            ans = letters[middle]
            right = middle -1;
        }
    }
    return ans;




    
};








console.log(nextGreatestLetter(["c", "f", "j"], "a"))