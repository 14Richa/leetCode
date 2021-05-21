var heightChecker = function(heights) {
    var expectedArray = [];
    var count = 0;

    for(var i of heights) {
        expectedArray.push(i)
    }

    expectedArray.sort((a,b) => a -b);
   // var expectedArray = heights.sort((a,b) => a-b)
    console.log(expectedArray);
    //var count = 0;
    for(var i = 0; i <heights.length; i++) {
        if(heights[i] !== expectedArray[i]) {
            count ++
        }
    }
    return count;
    
};

console.log(heightChecker([1,1,4,2,1,3]))