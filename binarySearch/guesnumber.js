var guessNumber = function (n) {

    var left = 1;
    var right = n;
    while (left <= right) {
        var middle = Math.floor((left + right) / 2);
        if (guess(middle) === 0) {
            return middle;

        }
        else if (guess(middle) < 0) right = middle - 1;
        else {
            left = middle + 1;
        }


    }
    return - 1;

};


console.log(guessNumber(10, 6))