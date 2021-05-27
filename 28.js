var strStr = function(haystack, needle) {
    if(needle.length == 0) return 0;
    if(needle === haystack) return 0;

    for(let i = 0; i <= haystack.length; i ++) {
        //if the sbstrin of haystack is equal to needle
        if(haystack.substring(i, i + needle.length) == needle) {
            return i;
        }
        //console.log(haystack.substring(2,4))
        //console.log(needle.length)

    }
    return -1;

};


console.log(strStr("hello", "hvfhj"));

