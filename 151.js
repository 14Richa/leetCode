function reverseString(str) {
    str = str.split(' ');
    //console.log(str)
    str.reverse();
    //console.log(str);
   
    let ans = str.filter( (word) => {return word.length > 0});
    //console.log(ans)
    //console.log(str);
    finalStr = ans.join(" ")
    //console.log(typeof(s))
    //console.log(finalStr);
    return finalStr;
};

console.log(reverseString( "  the sky is blue  "))

