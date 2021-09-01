/*  an integer x, return 
true if x is palindrome integer.*/

var isPalindrome = function(x) {
    var str = x.toString();
    var i = 0; 
    var j = str.length -1;
    var palindrome = true;
    while (j >= i) {
        if(str[i] !== str[j]) {
            palindrome = false;
            break;
        }
        i++;
        j--;
    }
    return palindrome;
    
};


console.log(isPalindrome(123))