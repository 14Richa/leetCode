var findDisappearedNumbers = function(nums) {
    var ans = []
    for ( var j = 1;j<=nums.length; j++){
        var found = false;
        for(var i = 0; i <nums.length; i ++) {
            if(nums[i] == j) {found = true; break;}
            //    else return false;
        }
        if( !found ) ans.push(j);
    }
   return ans;

};

console.log(findDisappearedNumbers([1,3,2,7,8,2,3,1]))