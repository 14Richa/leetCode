var reverseWords = function(s) {
    let a = s.split(' ');
    console.log(a)
    let ans;
    for(var i = 0; i < a.length; i++) {
        ans = a[i].split('').reverse().join("")
      //  console.log(ans)
        a[i] = ans;
      //console.log(ans)
    }
    return a.join(" ");
    
};

console.log(reverseWords("Let's take LeetCode contest"))