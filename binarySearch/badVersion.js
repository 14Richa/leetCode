var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var left = 1;
    var right = n;
    while (left <right) {
        var middle = Math.floor((left + right)/2);
        if(isBadVersion(middle)) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    return left;
        
    };
};