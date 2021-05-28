var longestCommonPrefix = function(strs) {
    if(strs.length < 1){
        return "";
    }
    if(strs.length === 1){
        return strs[0];
    }
    //let prefix = "";
    let minimumLength = strs[0].length;
    for (let i = 1; i < strs.length; i++) {
        //finding the minimum length of the strings in the array
        minimumLength = Math.min(minimumLength, strs[i].length);
    }
   //console.log(minimumLength);
    var prefix = "";

   for (let i = 0; i < minimumLength; i++) {
       let curr = strs[0][i];
       console.log(curr)
       for(let j =0; j <strs.length; j ++) {
           if(strs[j][i] !== curr) {
               return prefix; 
           }
       }
       //console.log(prefix)
       prefix = prefix + curr;
   }
  // console.log(prefix)
    return prefix;
};


console.log(longestCommonPrefix(["flower", "flight", "flow"]))