/*Return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.*/

var strStr = function(haystack, needle) {
    if(needle === haystack) return 0;

    for(let i = 0; i <= haystack.length; i ++) {
        if(haystack.substring(i, i + needle.length) == needle) {
            return i;
        }
       

    }
    return -1;
    
};

console.log(strStr("hello", "ll"))