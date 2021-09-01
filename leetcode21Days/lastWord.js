/* s consisting of some words separated by some 
number of spaces, return the length of the last word in the string.*/

var lengthOfLastWord = function(s) {

    if(!s) {
        return 0;
    }
    else {
        return s.trim().split(" ").reverse()[0].length
    }
    
};

console.log(lengthOfLastWord("Hello Worl"))