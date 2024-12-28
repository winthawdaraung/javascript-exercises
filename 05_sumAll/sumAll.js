const sumAll = function(start, end) {
    if (start < 0 || end < 0 || typeof(start) !== 'number' || typeof(end) !== 'number') {
        return 'ERROR';
    }
    else if(!Number.isInteger(start) || !Number.isInteger(end)){
        return 'ERROR';
    }
    else {
        let result = 0;
        if (start > end)
        {
            let tmp = start;
            start = end;
            end = tmp;
        }
        while (start <= end){
            result += start;
            start++;
        }
        return result;
    }
};
console.log(sumAll(2.5,4));
// Do not edit below this line
module.exports = sumAll;
